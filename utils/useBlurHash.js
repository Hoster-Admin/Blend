// utils/useBlurHash.js
import { useState, useEffect } from "react";
import { decode } from "blurhash";

const getBlurHashBase64 = (blurHash, width, height) => {
  if (typeof window === "undefined") return null; // Skip on server-side

  const pixels = decode(blurHash, width, height); // Decode BlurHash to pixel data
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png"); // Convert to base64 URL
};

const useBlurHash = (blurHash, width, height) => {
  const [blurDataURL, setBlurDataURL] = useState(null);

  useEffect(() => {
    const base64 = getBlurHashBase64(blurHash, width, height);
    setBlurDataURL(base64);
  }, [blurHash, width, height]);

  return blurDataURL;
};

export default useBlurHash;
