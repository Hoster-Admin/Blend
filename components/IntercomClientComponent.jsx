// components/IntercomClientComponent.tsx
// "use client";
// import { useEffect } from "react";

// export default function IntercomClientComponent() {
//   useEffect(() => {
//     const loadIntercom = async () => {
//       const { default: Intercom } = await import("@intercom/messenger-js-sdk");
//       Intercom({ app_id: "h8is4ykt" });
//     };

//     const timeout = setTimeout(loadIntercom, 5000);

//     const handleUserInteraction = () => {
//       clearTimeout(timeout);
//       loadIntercom();
//       window.removeEventListener("mousemove", handleUserInteraction);
//       window.removeEventListener("scroll", handleUserInteraction);
//       window.removeEventListener("keydown", handleUserInteraction);
//     };

//     window.addEventListener("mousemove", handleUserInteraction);
//     window.addEventListener("scroll", handleUserInteraction);
//     window.addEventListener("keydown", handleUserInteraction);

//     return () => {
//       clearTimeout(timeout);
//       window.removeEventListener("mousemove", handleUserInteraction);
//       window.removeEventListener("scroll", handleUserInteraction);
//       window.removeEventListener("keydown", handleUserInteraction);
//     };
//   }, []);

//   return null;
// }

"use client";
import { useEffect } from "react";

export default function IntercomClientComponent() {
  useEffect(() => {
    const loadIntercom = async () => {
      const { default: Intercom } = await import("@intercom/messenger-js-sdk");
      Intercom({ app_id: "h8is4ykt" });
    };

    loadIntercom(); // ✅ يشتغل فورًا عند أول render
  }, []);

  return null;
}
