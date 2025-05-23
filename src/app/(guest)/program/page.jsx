"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// export const metadata = {
//   title: 'Program | LinkBee',
//   description: 'Perusahaan IT Solution Link Bee',
// };

const Program = () => {
  const kelas = [
    {
      id: 1,
      nama: "Laravel",
      gambar: "/images/Laravel-Logo.wine.png",
    },
    {
      id: 2,
      nama: "Wordpress",
      gambar: "/images/WordPress.com-Logo.wine.png",
    },
    {
      id: 3,
      nama: "Rest API",
      gambar: "/images/6267597-middle-removebg-preview.png",
    },
    {
      id: 4,
      nama: "Flutter",
      gambar: "/images/png-transparent-flutter-hd-logo-removebg-preview.png",
    },
    {
      id: 5,
      nama: "Figma",
      gambar:
        "/images/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail-removebg-preview.png",
    },
    {
      id: 6,
      nama: "Scratch",
      gambar:
        "/images/scratch-cat-logo-png_seeklogo-431721-removebg-preview.png",
    },
  ];

  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/programs`).then((res) => {
      setProgram(res.data);
    });
  }, []);

  return (
    <>
      <div className="2xl:px-60 px-6 py-28 grid xl:grid-cols-2">
        <div className="flex items-center justify-center xl:justify-start xl:mb-0 mb-10">
          <img
            className="xl:w-[30rem] w-[18rem]"
            data-aos="fade-up"
            src="/images/3759159.jpg"
            alt="laptop-icon"
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Asah <span className="text-green-900">Skillmu</span>
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Jadi <span className="text-black">Talenta Hebat</span>
          </h1>
        </div>
      </div>

      <div
        className="py-28 2xl:px-60 px-6 space-y-5"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <h1
          className="xl:text-5xl text-3xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Program Kami
        </h1>
        {program.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            className=" px-7 py-12 rounded-xl shadow-lg bg-white"
          >
            <h1 className="text-3xl font-bold">
              <i className="fa-solid fa-code me-1"></i> {item.title}
            </h1>
            <p className="mt-2 line-clamp-5 font-medium mb-5">
              {item.description}
            </p>
            <Link
              href={item.status === "nonaktif" ? "#" : `/course?program_id=${item.id}`}
              onClick={(e) => item.status === "nonaktif" && e.preventDefault()}
              className={`px-4 py-2 font-semibold rounded-md transition-colors ${
                item.status === "nonaktif"
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-900 hover:bg-green-950 text-white"
              }`}
            >
              {item.status === "nonaktif" ? "Program Nonaktif" : "Daftar Sekarang"}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Program;
