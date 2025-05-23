"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswsord] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      setToken(res.data.token);
      toast.success("Login berhasil!");
      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      router.push("/program");
    } catch (err) {
      toast.error("Login gagal, email atau password salah");
    }
  };

  return (
    <div className="min-h-screen grid xl:grid-cols-12">
      <div className="bg-green-900 col-span-5 xl:flex flex-col justify-center items-center px-20 hidden">
        <h1 className="font-bold text-white text-4xl" data-aos="fade-right">
          Selamat Datang!
        </h1>
        <h3
          className="text-white text-center mt-5 font-medium"
          data-aos="fade-right"
        >
          Belum jadi bagian dari kami? Tenang, masih belum terlambat! Belum
          punya akun? Daftar sekarang.
        </h3>
        <Link
          data-aos="fade-right"
          href="/auth/register"
          className="border-2 border-white px-24 hover:bg-white hover:text-green-900 transition-colors py-2 text-xl font-semibold mt-5 text-white rounded-3xl"
        >
          Daftar
        </Link>
      </div>
      <div className="col-span-7 flex flex-col justify-center items-center xl:px-40 px-6">
        <h1 className="font-bold text-green-900 text-4xl" data-aos="fade-left">
          Login Sekarang
        </h1>
        <form
          onSubmit={handleLogin}
          className="space-y-5 w-full mt-10"
          data-aos="fade-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPasswsord(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ingat saya
            </label>
            <a href="#" className="text-green-900 hover:underline">
              Lupa password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-950 transition-colors font-semibold"
          >
            Masuk
          </button>
          <p className="text-sm">
            Belum punya akun?{" "}
            <Link href="/auth/register" className="text-green-900">
              Daftar sekarang
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
