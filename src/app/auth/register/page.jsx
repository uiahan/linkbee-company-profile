"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name : '',
    email : '',
    password : '',
    password_confirmation : '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, form);
      toast.success("Registrasi berhasil silahkan login!");
      router.push("/auth/login");
    } catch (err) {
      const msg = err?.response?.data?.message || 'Registrasi gagal';
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-12 overflow-hidden">
      <div className="xl:col-span-7 col-span-12 flex flex-col justify-center px-6 items-center xl:px-40">
        <h1 className="font-bold text-green-900 text-4xl" data-aos="fade-right">
          Daftar Akun
        </h1>
        <form onSubmit={handleRegister} className="space-y-5 w-full mt-10" data-aos="fade-right">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="enter your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-950 transition-colors font-semibold"
          >
            Daftar
          </button>
           <p className="text-sm">
            Sudah punya akun?{" "}
            <Link href="/auth/login" className="text-green-900">
              Login sekarang
            </Link>
          </p>
        </form>
      </div>
      <div className="bg-green-900 col-span-5 xl:flex hidden flex-col justify-center items-center px-20">
        <h1 className="font-bold text-white text-4xl" data-aos="fade-left">
          Hallo Teman!
        </h1>
        <h3
          className="text-white text-center mt-5 font-medium"
          data-aos="fade-left"
        >
          Sudah punya akun? Yuk, login sekarang dan lanjutkan perjalanan seru
          kamu bersama kami!
        </h3>
        <Link
          data-aos="fade-left"
          href="/auth/login"
          className="border-2 border-white px-24 hover:bg-white hover:text-green-900 transition-colors py-2 text-xl font-semibold mt-5 text-white rounded-3xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
