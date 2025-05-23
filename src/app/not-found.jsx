"use client";

import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 text-center" style={{ minHeight: "90vh" }}>
      <h1 data-aos="fade-down" className="text-6xl font-bold mb-3 text-green-700">404</h1>
      <h2 data-aos="fade-up" className="text-2xl font-medium mb-3">Upss, Halaman tidak ditemukan</h2>
      <p className="mb-4 text-gray-700" data-aos="fade-up">Sepertinya halaman yang kamu cari tidak tersedia.</p>
      <Link
        href="/"
        className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-green-900"
        data-aos="zoom-in"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
