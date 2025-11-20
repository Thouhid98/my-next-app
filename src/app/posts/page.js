import React from "react";

export default async function posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const allpost = await res.json();

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="p-8 bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-center mt-6 mb-10 text-white">
          Example of Server Side Generation
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-6">
          {allpost.slice(0, 6).map((post) => (
            <div
              key={post.id}
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs h-80"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {post.title}
              </h5>

              <p className="text-body mb-2">{post.body}</p>

              <a
                href="#"
                className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                Read more
                <svg
                  className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
