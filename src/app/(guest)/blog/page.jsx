"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Blog = () => {
  const [current, setCurrent] = useState(0);
  const [blog, setBlog] = useState([]);
  const [sliderBlogs, setSliderBlogs] = useState([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliderBlogs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderBlogs.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, sliderBlogs]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`).then((res) => {
      const blogs = res.data;

      setBlog(blogs);

      // Ambil 4 blog acak untuk slider
      const shuffled = [...blogs].sort(() => 0.5 - Math.random());
      setSliderBlogs(shuffled.slice(0, 4));
    });
  }, []);

  return (
    <>
      <div className="px-4 2xl:px-60 py-10">
        <div
          className="relative w-full h-52 xl:h-80 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <div className="overflow-hidden w-full h-full relative">
            {sliderBlogs.map((item, index) => (
              <img
                key={index}
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.cover}`}
                alt={`Slide ${index}`}
                className={`absolute w-full h-full rounded-lg object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute hidden xl:block top-1/2 left-[-20px] w-10 h-10 hover:bg-black transition-colors transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute hidden xl:block top-1/2 right-[-20px] w-10 h-10 transform hover:bg-black transition-colors -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2" data-aos="fade-up">
          {sliderBlogs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="2xl:px-60 px-6 pb-28 pt-20">
        <h1 className="xl:text-5xl text-4xl font-bold text-gray-900" data-aos="fade-up">
          Blog Kami
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-5 gap-5">
          {blog.map((item) => (
            <div className="space-y-5" key={item.id} data-aos="fade-up">
              <Link href={`/blog/${item.slug}`}>
                <div className="bg-white shadow-lg border border-gray-300 rounded-sm pb-4 flex flex-col h-full hover:-translate-y-2 hover:text-green-900 transition-all">
                  <div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.cover}`}
                      className="mb-2 h-52 xl:h-64 w-full object-cover"
                      alt=""
                    />
                    <div className="px-4 mt-4">
                      <h1 className="font-semibold text-xl">{item.title}</h1>
                      <div
                        className="text-gray-700 line-clamp-3 mt-2"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>
                      <p className="text-gray-600 font-medium mt-2 text-sm">
                        {item.created_at.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="h-[1px] bg-gray-300 my-10" data-aos="fade-up"></div>

        <div className="grid xl:grid-cols-3 mt-5 space-x-5">
          <div className="xl:grid space-y-5 col-span-2 hidden">
            {blog.slice(0, 3).map((item) => {
              return (
                <Link key={item.id} href={`/blog/${item.slug}`}>
                  <div
                  data-aos="fade-up"
                    className="bg-white shadow-lg border border-gray-300 group transition-all rounded-sm pb-4"
                  >
                    <div>
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.cover}`}
                        className="mb-2 h-52 xl:h-72 w-full object-cover group-hover:opacity-75 transition-all"
                        alt=""
                      />
                      <div className="px-4 mt-4">
                        <h1 className="text-3xl font-bold group-hover:text-green-900 transition-colors">
                          {item.title}
                        </h1>
                        <div
                          className="text-gray-700 line-clamp-3 mt-2"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                        <p className="text-gray-600 font-medium mt-2 text-sm">
                          {item.created_at.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            data-aos="fade-up"
            className="border p-4 border-gray-300 shadow-lg rounded-sm xl:min-h-[43rem] xl:max-h-[43rem]"
          >
            <h1 className="text-2xl font-bold" data-aos="fade-up">Postingan Lainnya</h1>
            {blog.slice(0, 5).map((item) => (
              <Link key={item.id} href={`/blog/${item.slug}`} data-aos="fade-up">
                <div className="mt-5">
                  <h1 className="text-xl hover:text-green-900 transition-colors font-bold text-gray-600">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {item.created_at.slice(0, 10)}
                  </p>
                </div>
                <hr className="text-gray-600 my-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
