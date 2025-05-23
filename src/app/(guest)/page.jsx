"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// export const metadata = {
//   title: "Beranda | LinkBee",
//   description: "Perusahaan IT Solution Link Bee",
// };

const Home = () => {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/programs`).then((res) => {
      setProgram(res.data);
    });
  }, []);

  const product = [
    {
      id: 1,
      nama: "E-Voting",
      deskripsi:
        "Sistem pemungutan suara digital yang aman, praktis, dan transparan untuk keperluan pemilihan internal.",
      gambar: "/images/E-Voting.png",
      link: "https://evoting.smkn2smi.sch.id/",
    },
    {
      id: 2,
      nama: "Sarpras Smea",
      deskripsi:
        "Aplikasi web untuk mempermudah pengelolaan sarana dan prasarana sekolah secara efisien dan terstruktur.",
      gambar: "/images/sarpras.png",
      link: "https://sarpras.smkn2smi.sch.id/",
    },
    {
      id: 3,
      nama: "Smart Learning",
      deskripsi:
        "Aplikasi pembelajaran online interaktif yang mendukung proses belajar mengajar dari mana saja.",
      gambar: "/images/smartlearning.png",
      link: "http://smartlearning.smkn2smi.sch.id/",
    },
    {
      id: 4,
      nama: "Flappy Bird",
      deskripsi: "Rasakan tantangan tanpa akhir dalam Flappy Bird, game klasik yang sederhana namun bikin nagih! Klik atau ketuk layar untuk menjaga burung tetap terbang dan hindari tabrakan dengan rintangan. Satu kesalahan, game over!",
      gambar: "/images/flappybird.png",
      link: "/game/flappy-bird.html",
    }
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
      gambar:
        "/images/scratch-cat-logo-png_seeklogo-431721-removebg-preview.png",
      link: "https://scratch.mit.edu/",
    },
  ];

  return (
    <>
      <div className="2xl:px-60 px-6 xl:grid xl:grid-cols-2 items-center py-20 xl:h-[85vh]">
        <div
          className="flex xl:hidden mb-8 justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/laptop-icon.png"
            className="w-[17rem] md:w-[25rem] object-cover"
          />
        </div>
        <div>
          <h1
            className="xl:text-7xl text-4xl xl:text-start text-center font-semibold text-green-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Solusi <span className="text-black">Digital</span>
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="1600"
            className="xl:text-7xl text-4xl xl:text-start text-center font-semibold mt-3 mb-3"
          >
            Bisnis <span className="text-green-900">Maksimal</span>
          </h1>
          <div
            data-aos="fade-up"
            className="flex justify-center xl:justify-start"
            data-aos-duration="1800"
          >
            <a
              href="#about"
              className="xl:text-3xl text-2xl shadow-lg bg-green-900 hover:bg-green-950 transition-colors px-8 py-2 text-white rounded-4xl font-semibold"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div className="justify-end hidden xl:flex" data-aos="fade-up">
          <img
            src="/images/laptop-icon.png"
            className="w-[30rem] object-cover"
          />
        </div>
      </div>

      <div className="bg-green-900 2xl:px-60 px-6 py-28 flex gap-24" id="about">
        <h4
          className="xl:text-4xl text-2xl xl:leading-14 leading-10 text-center font-semibold text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          "Ceritakan kebutuhanmu, kami siapkan solusinya, mulai dari website,
          aplikasi mobile, hingga sistem informasi. Semua bisa kamu wujudkan
          bersama Linkbee."
        </h4>
      </div>

      <div className="px-6 2xl:px-60 py-28" id="produk">
        <div>
          <h1
            className="text-center text-4xl font-semibold text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <i className="fa-regular fa-laptop-mobile"></i> Produk Kami
          </h1>
          <h4
            className="text-center text-green-700 text-2xl font-semibold mt-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Website dan Aplikasi Mobile
          </h4>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div
              className="mt-3 rounded-md bg-green-700 w-96"
              style={{ height: "3px" }}
            ></div>
          </div>
          <h5
            className="text-gray-600 text-center font-medium text-lg mt-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Kami menghadirkan berbagai produk digital inovatif yang dirancang
            untuk <br /> meningkatkan efisiensi dan daya saing bisnis Anda.
          </h5>
        </div>
        <div className="md:grid-cols-2 grid gap-14 mt-10">
          {product.map((item) => (
            <div className="xl:mb-5" key={item.id}>
              <img
                src={item.gambar}
                className="rounded-lg w-full xl:h-80 h-48 object-cover shadow-lg"
                alt=""
                data-aos="fade-up"
              />
              <h2
                className="text-3xl font-medium mt-3"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {item.nama}
              </h2>
              <p
                className="mt-1 mb-4 text-gray-600 line-clamp-2"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {item.deskripsi}
              </p>
              <div data-aos="fade-up" data-aos-duration="1600">
                <a
                  href={item.link}
                  className="bg-green-900 shadow-lg hover:bg-green-950 transition-colors text-white font-semibold px-7 py-2 rounded-md"
                >
                  Kunjungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="2xl:px-60 py-28 px-6"
        style={{ backgroundColor: "#f2f2f2" }}
        id="layanan"
      >
        <div data-aos="fade-up">
          <h1 className="text-center text-3xl font-semibold">
            <i className="fa-regular fa-laptop-code"></i> Program Kami
          </h1>
          <h4 className="text-center text-green-700 text-xl font-semibold mt-2">
            Solusi Digital Terbaik untuk Anda
          </h4>
          <div className="flex justify-center">
            <div
              className="mt-3 rounded-md bg-green-700 w-96"
              style={{ height: "3px" }}
            ></div>
          </div>
          <h5 className="text-gray-600 text-center font-medium text-md mt-3">
            Kami menyediakan berbagai progarm berbasis teknologi untuk <br />
            membantu Anda berkembang secara digital.
          </h5>
        </div>
        <div className="space-y-6 mt-8">
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
              <a
                href="#"
                onClick={(e) => item.status === "nonaktif" && e.preventDefault()}
                className={`px-4 py-2 font-semibold rounded-md transition-colors ${item.status === "nonaktif" ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-900 text-white hover:bg-green-950"}`}
              >
                {item.status === "nonaktif" ? "Program Nonaktif" : "Selengkapnya"}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="2xl:px-60 px-6 py-28">
        <div data-aos="fade-up">
          <h1 className="text-center text-3xl font-semibold text-black">
            <i className="fa-regular fa-graduation-cap"></i> Kelas Kami
          </h1>
          <h4 className="text-center text-green-700 text-xl font-semibold mt-2">
            Seru, Edukatif, Berbasis Proyek
          </h4>
          <div className="flex justify-center">
            <div
              className="mt-3 rounded-md bg-green-700 w-96"
              style={{ height: "3px" }}
            ></div>
          </div>
          <h5 className="text-gray-600 text-center font-medium text-md mt-3">
            Kelas interaktif untuk anak-anak dan remaja, mulai dari coding
            hingga
            <br /> pembuatan game. Belajar jadi lebih menyenangkan!
          </h5>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 gap-7">
          {kelas.map((item) => (
            <a href={item.link} key={item.id}>
              <div
                data-aos="fade-up"
                className="border-2 shadow-lg rounded-lg text-gray-600 border-gray-500 p-4 hover:-translate-y-2 transition-all duration-300 ease-in-out"
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

export default Home;
