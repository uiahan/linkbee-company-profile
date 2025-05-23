import React from "react";
import Link from "next/link";

async function getBlog(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

async function getAllBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params.slug);
  const allBlogs = await getAllBlogs();

  return (
    <div className="2xl:px-60 px-6 pt-10 pb-28 grid xl:grid-cols-3 gap-14">
      <div className="xl:col-span-2 col-span-3">
        <p className="text-sm text-gray-500 mb-1" data-aos="fade-up" data-aos-duration="1000">
          {new Date(blog.created_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1200">{blog.title}</h1>
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${blog.cover}`}
          className="mb-6 xl:h-96 h-56 w-full object-cover"
          alt="cover"
          data-aos="fade-up" data-aos-duration="1400"
        />
        <div
          data-aos="fade-up" data-aos-duration="1600"
          className="prose prose-lg max-w-none prose-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="space-y-6 col-span-3 xl:col-span-1">
        <h1 className="text-4xl font-semibold mb-4 mt-6" data-aos="fade-up" data-aos-duration="1000">Blog Lainnya</h1>
        {allBlogs
          .filter((b) => b.slug.toString() !== params.slug)
          .slice(0, 4)
          .map((item) => (
            <div key={item.id} data-aos="fade-up" data-aos-duration="1200">
                <Link href={`/blog/${item.slug}`} className="block">
                  <div className="flex space-x-4 items-center hover:bg-gray-100 py-2 rounded">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.cover}`}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
                <hr className="mt-5 text-gray-500" />
            </div>
          ))}
      </div>
    </div>
  );
}
