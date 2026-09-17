import Header from "@/components/header/Header";
import BlogFooter from "@/components/footer/BlogFooter";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
export default function WithFooterLayout({ children }) {
  return (
    <>
      <Toaster richColors position="bottom-left" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
