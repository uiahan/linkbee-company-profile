"use client";

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://mizaru.my.id/fa-pro/css/all.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {isLoading ? <Loading /> : children}
        </body>
      </html>
    </>
  );
}
