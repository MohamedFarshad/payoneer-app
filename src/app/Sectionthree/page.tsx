"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "Sales Enablement Tools",
    slug: "sales-enablement-tools",
  },
  {
    title: "Marketing & Reselling Guidelines",
    slug: "reselling-guidelines",
  },
  {
    title: "Referred AH Onboarding Overview",
    slug: "onboarding-overview",
  },
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
            Partner
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Onboarding Journey{" "}
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
                  src="images/back-button.svg"
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
                  Partner Activation & Enablement
                </span>
              </div>
            </div>
          </section>

          {/* reseller-overview */}

          {/* IMAGE */}
          <section id="sales-enablement-tools" className="scroll-mt-24 mb-0">
            <h2 className="text-[25px] font-bold text-gray-900 mt-10">
              Sales Enablement Tools
            </h2>
            <div className="mt-8 w-full">
              <Image
                src="/images/Sectionthree/Sectionthree1.png"
                alt="Reseller Program Phases"
                width={800}
                height={450}
                className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
              />
            </div>
          </section>
          {/* Pitch Decks & Sales Scripts */}
          <section id="kyc-process-explained" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              {/* Left column (Text) */}
              <div className="mt-0">
                {/* Pitch Decks & Sales Scripts */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Pitch Decks & Sales Scripts
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  View the Payoneer Global Payments Training Document to gain an
                  overview of our international reach, available payment
                  solutions, and step-by-step guidance on opening an account.
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    View Payoneer Training Document
                  </a>{" "}
                </p>
                {/* Training Webinars & Certifications */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Training Webinars & Certifications
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  This certificate recognizes Authorised Channel Partners of
                  Payoneer. It confirms your status as a trusted partner,
                  authorized to promote Payoneer’s global payment solutions.{" "}
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    Download Certificate
                  </a>{" "}
                </p>

                {/* Brand Positioning Guide  */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Brand Positioning Guide
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  View the brand battlecards to gain a breakdown of Payoneer’s
                  core features and see how our services compare with
                  competitors, Wio and 3S Money.
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    View Payoneer vs Wio Battlecard
                  </a>
                  &nbsp; &nbsp; &nbsp;&nbsp;
                  <a className="text-blue-600" href="">
                    View Payoneer vs 3S Money Battlecard
                  </a>
                </p>
                <h3
                  id="reselling-guidelines"
                  className="scroll-mt-24 text-[20px] font-semibold text-gray-900 mb-4 mt-10"
                >
                  Marketing & Reselling Guidelines
                </h3>
                <Image
                  src="/images/Sectionthree/Sectionthree2.png"
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                />
                {/* Branding & Messaging Compliance */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Branding & Messaging Compliance
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  View the Payoneer Design Guidelines to gain a comprehensive
                  understanding of our brand’s visual identity. This document
                  provides detailed examples of the correct use of logos, color
                  palettes, typography, imagery, tone of voice, and other design
                  variations.{" "}
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    View Payoneer Design Guidelines
                  </a>
                </p>
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Do&apos;s and Don&apos;ts in Promotions
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  Refer to the Do&apos;s & Dont&apos;s Guidelines to understand
                  how to accurately and effectively promote Payoneer. This
                  document outlines approved messaging, visual assets, and key
                  compliance points to ensure all promotional efforts align with
                  brand standards.
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    View Do’s and Dont’s Guidelines
                  </a>
                </p>

                {/* Personas */}

                <h2
                  id="onboarding-overview"
                  className="text-[25px] font-bold pt-2 text-gray-900 scroll-mt-24"
                >
                  Referred AH Onboarding Overview
                </h2>
                {/* Business we can’t support */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Personas
                </h3>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  View the customer profiles to gain an understanding of their
                  specific requirements, preferred payment functionalities, and
                  how they engage with Payoneer’s products.
                </p>
                <Image
                  src="/images/Sectionthree/Sectionthree3.png"
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                />
                <Image
                  src="/images/Sectionthree/Sectionthree4.png"
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                />
                <h2 className="text-[25px] font-bold text-gray-900 mt-10">
                  Business we can’t support
                </h2>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  To protect our network and stay compliant, certain high-risk
                  or restricted businesses are not eligible for Payoneer
                  services.
                </p>
              </div>
            </div>
          </section>

          <section className="scroll-mt-28 mt-10 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
              {/* Left Box */}
              <div
                className="rounded-[12px] border-[2px] p-6 text-[10px] text-[#878787] bg-white shadow-md"
                style={{
                  borderImage:
                    "linear-gradient(to bottom right, #5f6df3, #aa5cc3) 1",
                  borderImageSlice: 1,
                }}
              >
                <ul className="list-disc list-inside space-y-2">
                  <li>Any criminal or illegal act earnings.</li>
                  <li>Adult Entertainment Services</li>
                  <li>Art, antiquity and collectibles</li>
                  <li>Auction houses or antiques</li>
                  <li>Charities, Donations & Trusts</li>
                  <li>Chemicals (Of Any Kind)</li>
                  <li>Collection agencies</li>
                  <li>Counterfeited Products</li>
                  <li>
                    Cryptocurrency exchanges, Crypto Earnings & Binary Options.
                  </li>
                  <li>Dating Services</li>
                  <li>Domain registration & buying/ selling</li>
                  <li>
                    Energy Industry like Crude Oil, Natural Gas, Petroleum,
                    Diesel & Nuclear.
                  </li>
                  <li>Fantasy Sports</li>
                  <li>Financial institutions</li>
                  <li>Finished Metal Products & Hardware</li>
                </ul>
              </div>

              {/* Right Box */}
              <div
                className="rounded-xl border-[2px] p-6 text-[10px] text-[#878787] bg-white shadow-md"
                style={{
                  borderImage:
                    "linear-gradient(to bottom right, #aa5cc3, #5f6df3) 1 ",
                  borderImageSlice: 1,
                }}
              >
                <ul className="list-disc list-inside space-y-2">
                  <li>Fish and seafood of any kind (fresh, frozen or dry)</li>
                  <li>Gambling, Betting & Fantasy Sports</li>
                  <li>Insurance sales and services</li>
                  <li>Intrusive beauty and cosmetic products</li>
                  <li>Jewelry & bullion trading</li>
                  <li>Maritime Crewing & Staffing</li>
                  <li>Medical or healthcare services</li>
                  <li>Money exchange</li>
                  <li>Multi-level marketing (MLM)</li>
                  <li>
                    Pharmaceuticals, Medicine, Drugs, Fertilizers & Tobacco
                  </li>
                  <li>Prepaid cards or gift card/gift certificates</li>
                  <li>Raw & Semi-processed Steel & Iron</li>
                  <li>Real Estate sales, Investments & Trading.</li>
                  <li>Trusts or funds</li>
                  <li>Venture Capital and investments</li>
                  <li>Web Hosting & VPS</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
