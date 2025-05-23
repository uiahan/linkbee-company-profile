"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        navbar.classList.add("-translate-y-full");
      } else {
        navbar.classList.remove("-translate-y-full");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navItemClass = (path) =>
    `group relative inline-block px-4 py-1 transition-colors duration-300 ${
      isActive(path)
        ? "text-green-900 font-bold"
        : "text-gray-700 hover:text-green-900"
    }`;

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Produk", href: "/product" },
    { label: "Program", href: "/program" },
    { label: "Kelas", href: "/class" },
    { label: "Blog", href: "/blog" },
    { label: "Kontak", href: "/contact" },
  ];

  const handleToggle = () => {
    if (isOpen) {
      setIsAnimatingOut(true);
      setIsMounted(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimatingOut(false);
      }, 300);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setIsMounted(true);
      }, 10);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Berhasil logout");
    setIsLoggedIn(false);
    router.push("/auth/login");
  };

  return (
    <nav
      className="bg-white sticky top-0 z-50 transition-transform duration-300"
      id="navbar"
    >
      <div className="w-full flex items-center justify-between py-5 px-6 2xl:px-60">
        <div className="flex items-center gap-10">
          <a href="#" className="text-3xl font-semibold">
            <i className="fa-regular fa-laptop-mobile"></i>Link
            <span className="text-green-900">bee</span>
          </a>
          <ul className="hidden xl:flex space-x-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={navItemClass(item.href)}>
                  {item.label}
                </Link>
                <div className="flex justify-center">
                  <span
                    className={`block h-[2px] w-14 bg-green-900 transition-transform duration-300 origin-left ${
                      isActive(item.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden xl:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-green-900 text-white font-medium px-3 py-1 rounded-sm hover:bg-green-950 transition-colors"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/auth/login"
                className="bg-green-900 text-white font-medium px-3 py-1 rounded-sm hover:bg-green-950 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-gray-600 text-white font-medium px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
              >
                Daftar
              </Link>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="inline-flex items-center p-2 text-sm text-gray-700 rounded-lg xl:hidden hover:bg-gray-200 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {(isOpen || isAnimatingOut) && (
        <div
          className={`xl:hidden px-6 pb-4 overflow-hidden transform transition-all duration-300 ease-in-out origin-top ${
            isMounted && !isAnimatingOut
              ? "scale-y-100 opacity-100 max-h-screen"
              : "scale-y-0 opacity-0 max-h-0"
          }`}
        >
          <ul className="space-y-1 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMounted(false);
                    setIsAnimatingOut(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {isLoggedIn ? (
            <div className="space-y-3 mt-2">
              <button
                onClick={handleLogout}
                className="bg-green-900 hover:bg-green-950 transition-colors text-white py-1 w-full text-center font-semibold rounded-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-3 mt-2">
              <Link
                href="/auth/login"
                className="bg-green-900 hover:bg-green-950 transition-colors text-white py-1 block text-center font-semibold rounded-sm"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-gray-600 hover:bg-gray-800 transition-colors text-white py-1 block text-center font-semibold rounded-sm"
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
