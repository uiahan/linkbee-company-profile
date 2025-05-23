"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  "/images/image-2.jpg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
];

const kelas = [
  {
    id: 1,
    nama: "Laravel",
    gambar: "/images/Laravel-Logo.wine.png",
    link: "https://laravel.com/",
  },
  {
    id: 2,
    nama: "Wordpress",
    gambar: "/images/WordPress.com-Logo.wine.png",
    link: "https://wordpress.com/id/",
  },
  {
    id: 3,
    nama: "Rest API",
    gambar: "/images/6267597-middle-removebg-preview.png",
    link: "https://restfulapi.net/",
  },
  {
    id: 4,
    nama: "Flutter",
    gambar: "/images/png-transparent-flutter-hd-logo-removebg-preview.png",
    link: "https://flutter.dev/",
  },
  {
    id: 5,
    nama: "Figma",
    gambar:
      "/images/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail-removebg-preview.png",
    link: "https://www.figma.com/",
  },
  {
    id: 6,
    nama: "Scratch",
    gambar: "/images/scratch-cat-logo-png_seeklogo-431721-removebg-preview.png",
    link: "https://scratch.mit.edu/",
  },
];

const ClassContent = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="2xl:px-60 px-6 py-28 grid xl:grid-cols-2">
        <div className="flex items-center xl:mb-0 mb-10">
          <img
            className="xl:w-[30rem] w-[28rem]"
            data-aos="fade-up"
            src="/images/4136918.jpg"
            alt="laptop-icon"
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Ikuti <span className="text-green-900">Kelas Interaktif</span>
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900 xl:mt-3 mt-2"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Raih <span className="text-black">Skill Terbaikmu</span>
          </h1>
        </div>
      </div>

      <div
        className="py-28 2xl:px-60 px-6 space-y-5"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <h1
          className="xl:text-5xl text-4xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kelas Kami
        </h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 gap-7">
          {kelas.map((item) => (
            <a key={item.id} href={item.link}>
              <div
                data-aos="fade-up"
                className="shadow-lg rounded-lg bg-white text-gray-600 p-4 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={item.gambar}
                    className="xl:w-44 xl:h-44 w-20 h-20 object-cover"
                    alt=""
                  />
                  <h1 className="text-2xl mt-4 font-semibold">{item.nama}</h1>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassContent;
