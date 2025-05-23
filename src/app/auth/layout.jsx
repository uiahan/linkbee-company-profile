import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          className:
            "bg-green-900 text-white text-lg px-6 py-4 rounded-xl shadow-lg",
        }}
      />

      {children}
    </>
  );
}
