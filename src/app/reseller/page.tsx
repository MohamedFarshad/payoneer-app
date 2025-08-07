"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";

const topics = [
  { title: "About Payoneer", slug: "about-payoneer" },
  { title: "Why Partner with Us", slug: "why-partner" },
  { title: "Reseller Program Overview", slug: "reseller-overview" },
  { title: "Success Stories & Testimonials", slug: "key-features" },
];

const metrics = [
  { value: "190+", labelTop: "Countries", bar: "from-purple-400 to-pink-400" },
  { value: "150+", labelTop: "Currencies", bar: "from-purple-400 to-blue-400" },
  {
    value: "150+",
    labelTop: "Countries Local Clearing",
    bar: "from-pink-400 to-yellow-400",
  },
  {
    value: "145+",
    labelTop: "Countries with 2+ Banking Partners",
    bar: "from-indigo-400 to-blue-400",
  },
  {
    value: "99+",
    labelTop: "Countries with 3+ Banking Partners",
    bar: "from-purple-400 to-pink-400",
  },
  {
    value: "60+",
    labelTop: "Funding Currencies",
    bar: "from-purple-400 to-blue-400",
  },
];

const bankCols = [
  {
    title: "Global Banks",
    logos: [
      {
        name: "Bank of America",
        logo: "/images/globalbanks/bank-of-america.svg",
      },
      { name: "Barclays", logo: "/images/globalbanks/barclays.svg" },
      { name: "Citi", logo: "/images/globalbanks/citi.svg" },
      { name: "Deutsche Bank", logo: "/images/globalbanks/deutsche-bank.svg" },
    ],
  },
  {
    title: "Selected Regional & Local Banks",
    logos: [
      { name: "NAB", logo: "/images/localbanks/nab.svg" },
      { name: "ICBC", logo: "/images/localbanks/icbc.svg" },
      { name: "DBS", logo: "/images/localbanks/1.svg" },
      { name: "ING", logo: "/images/localbanks/2.svg" },
      { name: "RBS", logo: "/images/localbanks/3.svg" },
      { name: "UnionBank", logo: "/images/localbanks/4.svg" },
      { name: "BRI", logo: "/images/localbanks/5.svg" },
      { name: "6", logo: "/images/localbanks/6.svg" },
      { name: "7", logo: "/images/localbanks/7.svg" },
      { name: "8", logo: "/images/localbanks/8.svg" },
      { name: "9", logo: "/images/localbanks/9.svg" },
    ],
  },
  {
    title: "Selected Payment Providers",
    logos: [
      { name: "1", logo: "/images/paymentproviders/1.svg" },
      { name: "2", logo: "/images/paymentproviders/2.svg" },
      { name: "3", logo: "/images/paymentproviders/3.svg" },
      { name: "4", logo: "/images/paymentproviders/4.svg" },
      { name: "5", logo: "/images/paymentproviders/5.svg" },
      { name: "6", logo: "/images/paymentproviders/6.svg" },
      { name: "7", logo: "/images/paymentproviders/7.svg" },
      { name: "8", logo: "/images/paymentproviders/8.svg" },
      { name: "9", logo: "/images/paymentproviders/9.svg" },
    ],
  },
];

const brands = [
  { name: "Adobe", logo: "/images/brands/adobe.svg" },
  { name: "Airbnb", logo: "/images/brands/airbnb.svg" },
  { name: "Amazon", logo: "/images/brands/amazon.svg" },
  { name: "Booking.com", logo: "/images/brands/booking.svg" },
  { name: "Daraz", logo: "/images/brands/daraz.svg" },
  { name: "Cdiscount", logo: "/images/brands/cdiscount.svg" },
  { name: "Facebook", logo: "/images/brands/facebook.svg" },
  { name: "Fiverr", logo: "/images/brands/fiverr.svg" },
  { name: "Getty Images", logo: "/images/brands/gettyimages.svg" },
  { name: "Google", logo: "/images/brands/google.svg" },
  { name: "HomeAway", logo: "/images/brands/homeaway.svg" },
  { name: "JOOM", logo: "/images/brands/joom.svg" },
  { name: "JUMIA", logo: "/images/brands/jumia.svg" },
  { name: "LAZADA", logo: "/images/brands/lazada.svg" },
  { name: "LINIO", logo: "/images/brands/linio.svg" },
  { name: "mercado libre", logo: "/images/brands/mercadolibre.svg" },
  { name: "noon", logo: "/images/brands/noon.svg" },
  { name: "wayfair", logo: "/images/brands/wayfair.svg" },
  { name: "Rakuten", logo: "/images/brands/rakuten.svg" },
  { name: "Shopee", logo: "/images/brands/shopee.svg" },
  { name: "shutterstock", logo: "/images/brands/shutterstock.svg" },
  { name: "Uber", logo: "/images/brands/uber.svg" },
  { name: "Upwork", logo: "/images/brands/upwork.svg" },
  { name: "Walmart", logo: "/images/brands/walmart.svg" },
  { name: "Wish", logo: "/images/brands/wish.svg" },
  { name: "real.de", logo: "/images/brands/realde.svg" },
];

const resellerBullets = [
  "Offer a one-stop financial experience",
  "Capture more value across the customer lifecycle",
  "Get paid for onboarding and activating clients",
];

// const partnerBenefits = [
//   {
//     title: "Global Reach",
//     desc: "Access 190+ countries, 150+ currencies and robust local clearing.",
//   },
//   {
//     title: "Co-Marketing",
//     desc: "Joint campaigns, assets, and seller education to drive adoption.",
//   },
//   {
//     title: "Partner Support",
//     desc: "Dedicated partner managers, enablement, and sales toolkits.",
//   },
// ];

// Cards under "Payoneer, your ideal banking services partner"
const partnerCards = [
  {
    image: "/images/Expand-cross-border.svg",
    title: "Expand cross-border offering",
    link: "Compliment your offering with Payoneers global infrastructure",
    bullets: [
      "Hold 9+ currency balances in your global virtual accounts",
      "Send and receive payments in over 190+ countries/markets",
      "100% digital onboarding with 1-3 days onboarding SLA",
      "White-glove service supported by dedicated local account managers",
    ],
  },
  {
    image: "/images/Expand-cross-border.svg",
    title: "Unlock new revenue streams",
    link: "Generate new revenue streams via tailored revenue-share model",
    bullets: [
      "Volume-tiered revenue share model based on monthly transaction volume",
      "Fully transparent fees and pricing with detailed reporting and robust SLAs",
    ],
  },
  {
    image: "/images/Expand-cross-border.svg",
    title: "Grow your international brand",
    link: "Leverage Payoneer's resources and reach to grow your business",
    bullets: [
      "Co-marketing campaigns leveraging Payoneer's global channels",
      "Payoneer's global customer support in 22 languages",
    ],
  },
];

// Great for your customers
const customerBenefits = [
  {
    title: "Go Global",
    desc: "Send and receive payments in over 190 countries",
  },
  {
    title: "Get paid like a local",
    desc: "Global bank account details in 9+ Currencies",
  },
  { title: "Get started, fast", desc: "Fast Onboarding (100% online)" },
  {
    title: "Safeguard funds",
    desc: "Funds are safe in Global Systematically Important Banks (G-SIBs)",
  },
  {
    title: "Full transparency",
    desc: "Fully transparent fees and pricing with detailed reporting and robust SLAs",
  },
  { title: "Someone to talk to", desc: "Dedicated account manager" },
  { title: "Global support", desc: "Fast support in 22 languages" },
];

// Key features (glass cards)
const keyFeatures = [
  {
    logo: "/images/fast-onboarding.svg",
    title: "Fast Onboarding",
    desc: "Fast and digital onboarding. Get started in 1–3 days from document submission when you have a business bank account.",
  },
  {
    logo: "/images/debit-cards.svg",
    title: "International debit cards",
    desc: "Get a physical or digital Mastercard in EUR, USD, GBP and CAD. + great cashback rewards*",
  },
  {
    logo: "/images/collection-links.svg",
    title: "Payment collection links",
    desc: "Accept card payments from all over the world and tag them to invoices.",
  },
  {
    logo: "/images/online-checkout.svg",
    title: "Online checkout",
    desc: "Accept payments on webstores with our online checkout solution.",
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
            Welcome to
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              the Payoneer Reseller Program
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
                  Welcome to Payoneer Reseller Program
                </span>
              </div>
            </div>
          </section>

          {/* about-payoneer */}
          <section id="about-payoneer" className="scroll-mt-28">
            <h1 className="text-[25px] font-bold mb-2  text-[#252526]">
              About Payoneer
            </h1>
            <p className="text-[#878787] mb-6 max-w-2xl text-[14px]">
              Payoneer is a global financial services company that provides
              solutions for cross-border payments and international transactions
              for businesses, freelancers, and sellers.
            </p>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">
                Unmatched Global Infrastructure
              </h2>
              <p className="text-[#878787] text-[14px] mt-1">
                Covering 200+ countries with redundant capabilities in 145
                countries
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg bg-white  p-5 h-25"
                  >
                    {/* Left gradient border */}
                    <div className="absolute inset-y-0 left-0 w-1 rounded-l-lg bg-[linear-gradient(to_bottom,#DFD902,#FF4800,#FC4911,#F44B3E,#E84F87,#DA54D8,#6974E6,#1E8AF0,#0092F4)]"></div>

                    <div className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#DA54D8] to-[#0092F4]">
                      {m.value}
                    </div>
                    <div className="mt-1 text-sm text-[#878787] text-[12px]">
                      {m.labelTop}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank/Provider Cards */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {bankCols.map((col, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    {col.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {col.logos.map((bank, j) => (
                      <div
                        key={j}
                        className="h-10 px-3 rounded-md border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                      >
                        <Image
                          src={bank.logo}
                          alt={`${bank.name} logo`}
                          width={100} // adjust as needed
                          height={24} // since max-h-6 = 1.5rem = 24px
                          className="object-contain"
                          style={{ height: "auto" }} // keeps the aspect ratio
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted brands */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900">
                Trusted by the world&apos;s leading digital brands
              </h3>
              <p className="text-sm text-[#878787] text-[14px] mt-1 max-w-3xl">
                Serving over 2000 leading global marketplaces & digital
                platforms, sending tens of billions of dollars a year to SMBs
                across the world
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {brands.map((b, i) => (
                  <div
                    key={i}
                    className="h-14 rounded-lg border border-gray-100 bg-white shadow-sm flex items-center justify-center"
                  >
                    <Image
                      src={b.logo}
                      alt={`${b.name} logo`}
                      width={100} // adjust as needed
                      height={40} // adjust as needed
                      className="max-h-10 object-contain"
                      style={{ height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* why-partner */}
          <section id="why-partner" className="scroll-mt-28">
            <h1 className="text-[25px] font-semibold text-gray-900">
              Why Partner with Us
            </h1>
            <p className="mt-3 max-w-3xl text-[#878787] text-[14px]">
              Partner with Payoneer to unlock global payouts, world-class
              infrastructure, and co-marketing opportunities. Empower your
              merchants and creators to scale internationally with seamless
              onboarding and localized compliance.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {partnerCards.map(({ image, title, link, bullets }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6  shadow-gray-300"
                >
                  {/* Icon above title */}
                  <Image
                    src={image}
                    alt="Expand cross-border"
                    width={32}
                    height={32}
                    className="mt-4"
                  />
                  <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />

                  <h3 className="mt-2 text-sm font-semibold text-gray-900">
                    {title}
                  </h3>
                  <span className="mt-2 block text-[12px] font-medium bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {link}
                  </span>

                  <ul className="mt-4 text-sm text-[#878787] text-[10px] space-y-2">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="relative before:content-['•'] before:absolute before:left-0 before:text-[#878787] pl-3"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* reseller-overview */}
          <section id="reseller-overview" className="scroll-mt-28">
            <h2 className="text-[25px] font-bold text-gray-900">
              Reseller Program Overview
            </h2>
            <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
              The Payoneer Reseller Program enables incorporation agencies and
              VAS providers to become full-service financial partners for SMB
              clients.
            </p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Grow revenue by bundling Payoneer with your services
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
              <div className="w-full h-auto">
                <Image
                  src="/images/ResellerProgram-img.png"
                  alt="Reseller program"
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
            <section id="reseller-phases" className="scroll-mt-24 mb-24">
              <h2 className="text-[25px] font-bold text-gray-900 mt-10">
                Reseller Program Phases
              </h2>
              <div className="mt-8 w-full">
                <Image
                  src="/images/Reseller-Program-Phases-img.png"
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                />
              </div>
            </section>
            {/* Partner cards block */}
            <section className="mt-16">
              <h2 className="text-[25px] font-bold text-gray-900">
                Payoneer, your ideal banking services partner
              </h2>
              <p className="mt-2 text-[#878787] text-[14px] max-w-4xl">
                The proposed reseller partnership enables cross-border access
                for customers and unlocks new revenue streams.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {partnerCards.map(({ image, title, link, bullets }) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6  shadow-gray-300"
                  >
                    {/* Icon above title */}
                    <Image
                      src={image}
                      alt="Expand cross-border"
                      width={32}
                      height={32}
                      className="mt-4"
                    />
                    <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />

                    <h3 className="mt-2 text-sm font-semibold text-gray-900">
                      {title}
                    </h3>
                    <span className="mt-2 block text-[12px] font-medium bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {link}
                    </span>

                    <ul className="mt-4 text-sm text-[#878787] text-[10px] space-y-2">
                      {bullets.map((b, i) => (
                        <li
                          key={i}
                          className="relative before:content-['•'] before:absolute before:left-0 before:text-[#878787] pl-3"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="scroll-mt-24">
            <h2 className="text-[25px] font-bold text-gray-900">
              Great for Your Customers
            </h2>
            <p className="mt-2 text-[#878787] text-[14px]">
              Keeping your customers happy is always good for business.
            </p>
            <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {customerBenefits.map((item, i) => (
                <div key={i}>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 mt-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
                  <p className="mt-3 text-[#878787] text-[10px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          {/* key-features */}
          <section id="key-features" className="scroll-mt-10 py-15 ">
            <h2 className="text-[25px] font-bold text-gray-900">
              Key features your customer will value most
            </h2>
            <p className="mt-2 text-[#878787] text-[14px]">
              Focus on building long-term value, not just one-time transactions.
            </p>
          </section>
          <section
            className="scroll-mt-24 relative py-1 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Reseller-card-bg.png')" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {keyFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="h-full p-10 border border-white/20 bg-white/70 backdrop-blur-md shadow-lg hover:bg-white/20 transition flex flex-col items-center"
                  >
                    {/* Logo */}
                    <div className="mb-4">
                      <Image
                        src={f.logo}
                        alt={`${f.title} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[12px] font-semibold text-black text-center">
                      {f.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-[10px] text-black flex-grow text-center">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 " />
          </section>
        </main>
      </div>
    </div>
  );
}
