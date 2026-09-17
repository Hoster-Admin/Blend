import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
export default function WithUiLayout({ children }) {
  return (
    <>
      <Toaster richColors position="bottom-left" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
