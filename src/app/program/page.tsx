"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";

const topics = [
  { title: "How to Join the Program", slug: "How-to-Join" },
  {
    title: "Understand Your Role as a Payoneer Reseller",
    slug: "Understand-Your-Role",
  },
  { title: "Understanding Partner Tiers", slug: "Understanding-Partner-Tiers" },
  {
    title: "Understanding Commercials & Payment Calculators",
    slug: "Payment-Calculators",
  },
];

const resellerBullets = [
  "Receive the link for registration from your affiliate manager.",
  "Click on the link and fill in your information in Part 1 of the Partner Sign Up form.",
  "Click Next to continue to User Details.",
];
const resellerBulletsTwo = [
  "Fill in your information. It is recommended to choose a strong and unique password.",
  "Click Next to continue to User Agreement..",
];
const resellerBulletsThree = [
  "Enable the two checkboxes. .",
  "Click Sign up. You are now successfully signed up!",
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const topic of topics) {
        const el = document.getElementById(topic.slug);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActive(topic.slug);
            window.history.replaceState(null, "", `?section=${topic.slug}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Navbar />

      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-[400px] sm:h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Getting Started
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Partner Onboarding
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg"></p>
        </div>
      </section>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-24 h-screen w-[400px] p-10 border-r hidden lg:block">
          <h3 className="text-[25px] text-black  font-semibold mb-4">Topics</h3>
          <nav className="space-y-2">
            {topics.map((topic) => (
              <button
                key={topic.slug}
                onClick={() => scrollTo(topic.slug)}
                className={`block text-left w-full px-4 py-2 rounded-full text-[10px] transition border ${
                  active === topic.slug
                    ? "bg-[#EFEFEF] text-[#878787] border-white"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {topic.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white">
          <section
            aria-label="Breadcrumb"
            className="sticky top-[80px] z-40 bg-white text-black border-b border-white/10 backdrop-blur"
          >
            <div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 h-6 flex items-center gap-3 bg-white"
              onClick={() => router.push("/")}
            >
              {/* Back button */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-white text-black"
                aria-label="Back to Table of Content"
                title="Back to Table of Content"
              >
                <Image
                  src="/images/back-button.svg"
                  alt="Expand cross-border"
                  width={32}
                  height={32}
                  className="mt-0 "
                />
              </button>

              {/* Crumb text */}
              <div className="flex items-center gap-2 text-sm text-[#878787]">
                <span
                  className="font-medium cursor-pointer hover:underline"
                  onClick={() => router.push("/")}
                >
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate">
                  {/* {topics.find((t) => t.slug === active)?.title ||
                    "Welcome to Payoneer Reseller Program"} */}
                  Getting Started : Partner Onboarding
                </span>
              </div>
            </div>
          </section>

          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-28">
            <h2 className="text-[25px] font-bold text-gray-900">
              How to Join the Program
            </h2>
            <p className="mt-2 text-gray-900 text-[20px] max-w-2xl">
              Reseller Sign-Up Process{" "}
            </p>
            <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
              The Payoneer Reseller Program enables incorporation agencies and
              VAS providers to become full-service financial partners for SMB
              clients.
            </p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Account Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[14px]">
                  {resellerBullets.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Image
                        src="/images/Check-icon.svg"
                        alt="My Icon"
                        width={20}
                        height={20}
                        className="mt-0 flex-none"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[200px] h-auto">
                <Image
                  src="/images/gettingstarted/Content.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </section>
          {/* 2 */}
          <section id="reseller-overview" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-[30%_70%] gap-10  ">
              {/* Left image */}
              <div className="flex justify-center w-[200px]">
                <Image
                  src="/images/gettingstarted/Content.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  User Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[14px]">
                  {resellerBulletsTwo.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Image
                        src="/images/Check-icon.svg"
                        alt="My Icon"
                        width={20}
                        height={20}
                        className="mt-0.5 flex-none"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* 3rd */}
          <section id="reseller-overview" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  User Agreement
                </h3>
                <ul className="space-y-4 text-[#878787] text-[14px]">
                  {resellerBulletsThree.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Image
                        src="/images/Check-icon.svg"
                        alt="My Icon"
                        width={20}
                        height={20}
                        className="mt-0 flex-none"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[200px] h-auto">
                <Image
                  src="/images/gettingstarted/Content.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </section>
          {/* 4th */}
          <section id="Understand-Your-Role" className="scroll-mt-28">
            <h2 className="text-[25px] font-bold text-gray-900">
              Understand Your Role as a Payoneer Reseller
            </h2>

            <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
              View the following details to ensure you meet all requirements and
              maintain compliance with our program.{" "}
            </p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                Your Role as a Reseller
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[10px] space-y-2 text-gray-700 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  Actively promote Payoneer&apos;s services to potential clients
                  (“Prospects”)
                </li>
                <li>Refer those Prospects using special tracking links</li>
                <li>
                  Ensure that any referred client completes the Payoneer
                  registration process
                </li>
                <li>
                  Provide basic support to approved clients (“Registered Users”)
                </li>
                <li>
                  Never alter or interfere with the applicant&apos;s
                  registration data
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                How to Refer Clients Share Payoneer-provided links that contain
                your unique tracking code
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[10px] space-y-2 text-gray-700 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  You may only promote Payoneer using official Payoneer
                  marketing materials and branding
                </li>
                <li>
                  Use of Payoneer&apos;s Brand: limited, non-exclusive license
                  to use logos, trademarks, and marketing materials
                </li>
                <li>
                  You cannot alter marketing content or use the brand in a
                  misleading or damaging way
                </li>
                <li>This license can be revoked at any time</li>
              </ul>
            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                Important Limits You cannot bind Payoneer or speak on its behalf
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[10px] space-y-2 text-gray-700 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  You may not charge clients any extra fees without written
                  approval from Payoneer
                </li>
                <li>
                  You must not share or modify a Prospect&apos;s data unless
                  explicitly approved
                </li>
                <li>
                  You must always follow the Promotion and Marketing Guidelines
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
