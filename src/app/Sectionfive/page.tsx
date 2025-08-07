"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "Frequently Asked Questions (FAQs)",
    slug: "referred-account-holders",
  },
  {
    title: "Support Ticket Questionnaire",
    slug: "clm-flow",
  },
];

const faqs = [
  {
    type: "list",
    question:
      "What type of queries can I raise via the Reseller Operations Support Request Form?",
    answers: [
      "Account approval (BO opening, document/risk alert)",
      "Account blockages (pre-risk, suspicious activity)",
      "Payment reviews (non-loaded, declined payments)",
      "Product activation (BLS, GLPS, Card, etc.)",
      "Products upsell (Working Capital, Checkout, WFM, etc.)",
      "Price reduction for newly acquired accounts",
      "Name mismatch on bank account",
      "General account information query",
    ],
  },
  {
    type: "table",
    question: "What are common account opening issues?",
    tableData: {
      headers: ["Name of the issue", "Relevant request/query type"],
      rows: [
        [
          "Pending Account Approval",
          "account approval - opening requirements in BO",
        ],
        [
          "Account Holder not able to see the docs",
          "account approval - opening requirements in BO",
        ],
        ["ID number mismatch", "account approval - document approval"],
        [
          "Account Opened KYC not reflecting in the dashboard",
          "account approval - opening requirements in BO",
        ],
        [
          "Account Suspended or blocked",
          "account blocked - manually by risk (suspicious activity)",
        ],
        ["Account Holder has Sanction Alerts", "account approval - risk alert"],
        ["Account Inrule", "account blocked - pre-risk, automatic (in-rule)"],
        [
          "Account Bare Issue",
          "account blocked - pre-risk, automatic (in-rule)",
        ],
        [
          "Issue with Log In to MyAccount",
          "Account requests - Need additional Information",
        ],
        [
          "Unable to receive the confirmation email",
          "Account requests - Need additional Information",
        ],
        [
          "Date of birth / Date of incorporation mismatch",
          "account approval - document approval",
        ],
        ["Unable to upload documents", "account approval - document approval"],
        [
          "Unable to receive the MFA code",
          "Account requests - Need additional Information",
        ],
      ],
    },
  },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [faqOpenMap, setFaqOpenMap] = useState<{ [key: number]: boolean }>({
    0: true,
  });

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

  const toggleFaq = (index: number) => {
    setFaqOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-[400px] sm:h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Supporting Your Referred
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Account Holders
            </span>
          </h1>
        </div>
      </section>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-24 h-screen w-[400px] p-10 border-r hidden lg:block">
          <h3 className="text-[25px] text-black font-semibold mb-4">Topics</h3>
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
          {/* Breadcrumb */}
          <section
            aria-label="Breadcrumb"
            className="sticky top-[80px] z-40 bg-white text-black border-b border-white/10 backdrop-blur"
          >
            <div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 h-6 flex items-center gap-3 bg-white"
              onClick={() => router.push("/")}
            >
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
                  className="mt-0"
                />
              </button>
              <div className="flex items-center gap-2 text-sm text-[#878787]">
                <span
                  className="font-medium cursor-pointer hover:underline"
                  onClick={() => router.push("/")}
                >
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate">
                  Referred Account Holder Onboarding Journey
                </span>
              </div>
            </div>
          </section>

          {/* KYC Section */}
          <section id="kyc-process-explained" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              <div className="mt-0">
                <h2 className="text-[25px] font-bold text-gray-900">
                  Reseller Operations External FAQ Guide
                </h2>
                <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
                  This document is designed to guide reseller partners on how to
                  raise operational support queries through the official
                  Reseller Operations Support Request Form. Please refer to the
                  FAQs below to navigate the most common queries and
                  resolutions.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="scroll-mt-28 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#eee] rounded-[12px] px-6 py-4 bg-white shadow-sm"
              >
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-[16px] font-semibold text-gray-900 max-w-[90%] leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className="w-5 h-5 flex items-center justify-center rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #5f6df3, #aa5cc3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <Image
                      src="/images/toggle-faq.svg"
                      alt="Toggle FAQ"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {faqOpenMap[index] && (
                  <div className="mt-4">
                    {faq.type === "list" && faq.answers && (
                      <ul className="text-[14px] text-[#333] space-y-2 list-disc list-inside">
                        {faq.answers.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {faq.type === "table" && faq.tableData && (
                      <div className="overflow-x-auto rounded-2xl text-sm">
                        <table className="min-w-full text-[10px] text-[#878787] ">
                          <thead className="bg-[#EFEFEF] text-[#878787]">
                            <tr>
                              {faq.tableData.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className="px-4 py-2 font-semibold text-left"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {faq.tableData.rows.map((row, rowIndex) => (
                              <tr key={rowIndex} className="even:bg-[#fafafa]">
                                {row.map((cell, colIndex) => (
                                  <td key={colIndex} className="px-4 py-2">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
