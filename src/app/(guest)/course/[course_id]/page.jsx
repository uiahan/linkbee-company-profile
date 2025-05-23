"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import toast from "react-hot-toast";

const Form = () => {
  const { course_id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    birth_date: "",
    birth_place: "",
    address: "",
    phone: "",
    school_origin: "",
    recommender_name: "",
    recommender_phone: "",
    course_id: "",
    user_id: "",
  });

  useEffect(() => {
    if (course_id) {
      setFormData((prev) => ({ ...prev, course_id }));
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFormData((prev) => ({ ...prev, user_id: user.id }));
    }
  }, [course_id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/course/store`,
        formData
      );

      await MySwal.fire({
        icon: "success",
        title: "Pendaftaran berhasil",
        text:
          response.data.message ||
          "Terimakasih telah mendaftar, silahkan tunggu kami menghubungi anda",
        showConfirmButton: true,
        customClass: {
          confirmButton:
            "bg-green-900 text-white rounded px-6 py-2 hover:bg-green-800",
        },
        buttonsStyling: false,
        allowOutsideClick: false,
      });

      router.push("/program");
    } catch (error) {
      let errorMessage = "Terjadi kesalahan saat mengirim data.";
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Tidak bisa terhubung ke server. Cek koneksi.";
      } else {
        errorMessage = "Error: " + error.message;
      }

      await MySwal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        showConfirmButton: true,
        customClass: {
          confirmButton:
            "bg-green-900 text-white rounded px-6 py-2 hover:bg-green-800",
        },
        buttonsStyling: false,
        allowOutsideClick: false,
      });
    }
  };

  return (
    <div className="2xl:px-60 px-6 xl:pt-20 pt-12 pb-20 flex items-center justify-center" style={{ backgroundColor: "#f2f2f2" }}>
      <form
        data-aos="fade-up"
        onSubmit={handleSubmit}
        className="shadow-md w-full px-5 py-18 rounded-md bg-white"
      >
        <h1 className="text-center font-semibold xl:text-4xl text-3xl text-green-900">
          Masukan Data Diri
        </h1>
        <div className="flex justify-center my-4">
          <div className="bg-green-900 h-[2px] w-96"></div>
        </div>
        <div className="grid mt-10 xl:grid-cols-2 gap-y-7 gap-x-5">
          <div>
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Tanggal Lahir</label>
            <input
              type="date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Tempat Lahir</label>
            <input
              type="text"
              name="birth_place"
              value={formData.birth_place}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Alamat</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Nomor Telepon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Asal Sekolah</label>
            <input
              type="text"
              name="school_origin"
              value={formData.school_origin}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Nama Perekomendasi</label>
            <input
              type="text"
              name="recommender_name"
              value={formData.recommender_name}
              onChange={handleChange}
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label>Nomor Hp Perekomendasi</label>
            <input
              type="text"
              name="recommender_phone"
              value={formData.recommender_phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 xl:py-2 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              hidden
              name="course_id"
              value={formData.course_id}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <input
              hidden
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              readOnly
            />
          </div>
        </div>
        <div className="flex justify-center xl:mt-5">
          <button
            type="submit"
            className="bg-green-900 text-white xl:px-36 w-full xl:py-2 py-1 rounded-lg font-semibold hover:bg-green-950 transition-colors"
          >
            Kirim Pendaftaran
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
