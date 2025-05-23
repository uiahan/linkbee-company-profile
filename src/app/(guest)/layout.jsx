"use client";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000, // tampil selama 5 detik
          style: {
            background: "#fff", // dark green
            color: "#14532d",
            fontSize: "1.125rem", // text-lg
            padding: "1rem 1.5rem", // px-6 py-4
            borderRadius: "0.75rem", // rounded-xl
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },
        }}
      />

      <Link
        href="/program"
        className="hover:bg-green-950 transition-colors fixed bottom-4 right-4 bg-green-900 text-white px-4 py-3 rounded-full shadow-2xl font-semibold"
        data-aos="fade-up"
      >
        <i className="fa-solid fa-graduation-cap mr-1"></i> Linkbee Academy
      </Link>
      <Footer />
    </>
  );
}
