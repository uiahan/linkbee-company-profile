"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const Course = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const programId = searchParams.get("program_id");
  const router = useRouter();

  const isLoggedIn =
    typeof window !== "undefined" && !!localStorage.getItem("token");

  useEffect(() => {
    const fetchCourse = async () => {
      if (!programId) {
        setError("Program ID tidak ditemukan di URL.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course`,
          { params: { program_id: programId } }
        );
        setCourse(res.data);
      } catch (err) {
        setError("Gagal memuat data course");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [programId]);

  const handleDaftarClick = (e, id) => {
    if (!isLoggedIn) {
      e.preventDefault();
      router.push("/auth/login");
    }
  };

  if (loading)
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <p>Loading data...</p>
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-6 2xl:px-60 pt-12 pb-20" style={{ backgroundColor: "#f2f2f2" }}>
      <h1 className="xl:text-4xl text-2xl font-bold" data-aos="fade-up">
        Pilih sesi yang tersedia
      </h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-5">
        {course.map((item) => {
          const isFull = item.student_count >= item.max_student;

          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              key={item.id}
              className="bg-white p-5 rounded-md shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-black">
                {item.course_name}
              </h4>
              <div className="text-sm text-gray-700 space-y-2 mt-2">
                <p>
                  <i className="fa-regular fa-calendar text-green-900 mr-2"></i>
                  Hari : {item.day}
                </p>
                <p>
                  <i className="fa-regular fa-user text-green-900 mr-2"></i>
                  {item.student_count}/{item.max_student} siswa
                </p>
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-green-900"></i>
                  <span>
                    {item.time_start.slice(0, 5)} - {item.time_end.slice(0, 5)}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                {isFull ? (
                  <span className="block text-center bg-red-500 text-white py-1 rounded-lg font-medium">
                    Sesi Penuh
                  </span>
                ) : (
                  <Link
                    href={`/course/${item.id}`}
                    onClick={(e) => handleDaftarClick(e, item.id)}
                    className="block text-center bg-green-900 hover:bg-green-950 transition-all duration-300 text-white py-1 rounded-sm font-semibold"
                  >
                    Daftar
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
