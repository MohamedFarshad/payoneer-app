"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const topics = [
  { title: "About Payoneer", slug: "about-payoneer" },
  { title: "Why Partner with Us", slug: "why-partner-with-us" },
  { title: "Reseller Program Overview", slug: "reseller-program-overview" },
  { title: "Success Stories & Testimonials", slug: "success-stories" },
];

const ResellerLayout = ({
  children,
  activeSlug,
}: {
  children: React.ReactNode;
  activeSlug: string;
}) => {
  const router = useRouter();

  return (
    <section className="pt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
        {/* Sidebar */}
        <aside className="lg:pt-6 sticky top-24 self-start">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 lg:mb-8">
            Topics
          </h3>
          <nav className="space-y-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/reseller/${topic.slug}`}
                className={`block text-sm rounded-full px-4 py-2 border transition ${
                  activeSlug === topic.slug
                    ? "bg-gray-100 border-transparent"
                    : "bg-white hover:bg-gray-50 border-gray-200"
                }`}
              >
                {topic.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div>
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
            <button
              onClick={() => router.push("/")}
              className="hover:underline text-blue-600"
              aria-label="Back to Table of Contents"
            >
              Table of Contents
            </button>
            <span>›</span>
            <span className="text-gray-700 capitalize">
              {activeSlug.replace(/-/g, " ")}
            </span>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default ResellerLayout;
