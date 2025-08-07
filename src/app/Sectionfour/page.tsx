"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "Account Sign-Up Process for Referred Account Holders",
    slug: "referred-account-holders",
  },
  {
    title: "CLM Flow",
    slug: "clm-flow",
  },
  {
    title: "KYC Process Explained",
    slug: "kyc-process-explained",
  },
];

const resellerBullets = [
  "Enter the details of your company in the provided fields.",
];
const resellerBulletsTwo = [
  "Add all relevant details in the fields provided, including UAE Company Address & Phone number ",
];
const resellerBulletsThree = ["Enter your password & Company ID Details "];
const resellerBulletsFour = [
  "Add your Bank Account Details in the fields provided",
];
const resellerBulletsfive = [
  "Fill in your information. It is recommended to choose a strong and unique password.",
  "Click Next to continue to User Agreement..",
];
const resellerBulletssix = ["Account is Approved."];
const resellerBulletsseven = [
  "Select 'Get started' on the homepage to begin the onboarding process.",
];
const resellerBulletseight = [
  " Select your preferred payment from the two available options. ",
];
const resellerBulletsnine = [
  "Select the category that best describes your business from the drop-down selection.",
  "Click Next to continue.!",
];
const resellerBulletsTen = [
  "Enter your business email address in the space provided.",
  "Select Next to continue. .",
  "Verify your email address by entering the six-digit code, sent to your email account.",
  "Select Next to continue.",
];
const resellerBulletswleven = [
  "Confirm your business registration by selecting the relevant option.",
  "Complete the form fields by filling in the required information.",
  "Select Next to continue.",
];
const resellerBulletswtwelve = [
  "Select your country/region of residence from the drop-down options.",
  "Select Next to continue. ",
];
const resellerBulletsthirteen = [
  "Type your mobile number in the available space. This will be used for a two-step verification process.",
  "Select Next to continue.",
  "Enter the 6-digit code, sent to your mobile number.",
  "Select Next to continue.",
];
const resellerBulletsfourteen = [
  "Create a password which will be used to sign in. ",
  "Select Register to continue. ",
];
const resellerBulletsfifteen = [
  "The screen will display a list of documents that are required to verify your Payoneer account.",
  "Select the document option that you wish to submit and upload the relevant documentation.",
  "Completes this process for each of the required documents.  ",
  "After submitting all required documents, select Save and Close to continue.",
];
const resellerBulletssisteen = [
  "The screen will display the requirements for the company owner's photo ID.",
  "Drag the relevant file into the space provided and select Submit to complete the process.",
];
const resellerBulletsseventeen = [
  "Select the country or region where the document was issued from the drop-down options.",
  "Drag the relevant file into the space provided and select Submit  to complete the process.",
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
            Referred Account Holder (AH)
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
                  Referred Account Holder Onboarding Journey
                </span>
              </div>
            </div>
          </section>

          {/* reseller-overview */}
          <section id="referred-account-holders" className="scroll-mt-28">
            <h2 className="text-[25px] font-bold text-gray-900">
              Account Sign-Up Process for Referred Account Holders
            </h2>
            <div className="flex justify-between items-center max-w-2xl">
              <p className="text-gray-900 text-[20px] font-semibold">
                Standard Registration FLOW
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Partner Account Opening Link
              </a>
            </div>

            <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
              Once you sign up on Partner link, Your Account Manager would be
              able to share a customized link for you
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Company Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
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
                  src="/images/sectionfour/Content1.png"
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
              <div className="flex justify-center w-[200px]">
                <Image
                  src="/images/sectionfour/Content2.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Contact Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
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
                  Security Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
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
                  src="/images/sectionfour/Content3.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </section>

          <section id="reseller-overview" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-[30%_70%] gap-10">
              {/* Left image */}
              <div className="flex justify-center w-[200px]">
                <Image
                  src="/images/sectionfour/Content4.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Payment Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsFour.map((text, i) => (
                    <li
                      key={i}
                      className=" text-[12px] flex items-start gap-3 text-[#878787]"
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
                <p className=" text-[#878787] text-[10px] mt-6">
                  If you do not have a Company Business Bank Account (a Business
                  Bank), you can enter your Personal Bank Account.
                </p>
                <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>
                    Please Note - During KYC, you would be asked to upload your
                    Personal Bank Statement (Issued within Last 3 Months)
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left column (Text) */}
              <div className="mt-0">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  KYC Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsfive.map((text, i) => (
                    <li
                      key={i}
                      className="text-[12px] flex items-start gap-3 text-[#878787]"
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

                {/* Additional Content */}
                <p className="font-semibold text-[#878787] text-sm mt-4 text-[12px]">
                  Please Click Submit Now & update the requested information
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-4 text-[12px]">
                  Company Documents
                </p>
                <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>Business License</li>
                  <li>Certificate of Formation</li>
                  <li>
                    Memorandum of Association (MOA)
                    <span className="block text-[#878787] text-[10px]">
                      This should show the number of shares held by each
                      shareholder.
                    </span>
                  </li>
                </ul>
                <p className="font-semibold text-[#878787] text-sm mt-4 text-[12px]">
                  Director & Shareholder Documents
                </p>
                <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>Passport</li>
                  <li>Home Country Address</li>
                  <li>
                    Personal Address Proof (Any of the below is good):
                    <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400">
                      <li>Personal Bank Statement</li>
                      <li>Utility Bill</li>
                      <li>Tenancy Agreement</li>
                    </ul>
                  </li>
                  <li>
                    Personal Bank Statement (Issued within Last 6 Months showing
                    residential address)
                  </li>
                </ul>
              </div>

              {/* Right column (Image) */}
              <div className="flex items-center justify-center">
                <div className="w-[200px] h-auto">
                  <Image
                    src="/images/sectionfour/Content5.png"
                    alt="Reseller program"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <div className="mt-10 grid grid-cols-[30%_70%] gap-10">
              {/* Left image */}
              <div className="flex justify-center w-[200px]">
                <Image
                  src="/images/sectionfour/Content6.png"
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
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletssix.map((text, i) => (
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

          {/* CLM Flow */}
          <section id="clm-flow" className="scroll-mt-28">
            <h2 className="text-[25px] font-bold text-gray-900">CLM Flow</h2>
            <div className="flex justify-between items-center max-w-2xl">
              <p className="text-gray-900 text-[20px] font-semibold">
                Step-by-Step Onboarding Guides for Clients:
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Partner Account Opening Link
              </a>
            </div>
            <p className="text-[12px] font-bold text-[#878787]">
              View the step-by-step guide for onboarding and registration of
              your <br /> Payoneer business account.
            </p>
          </section>
          <section>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Onboarding Process
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsseven.map((text, i) => (
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
                  src="/images/sectionfour/Content7.png"
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
                  src="/images/sectionfour/Content8.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Registration
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletseight.map((text, i) => (
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
          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Business Details
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsnine.map((text, i) => (
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
                  src="/images/sectionfour/Content9.png"
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
              <div className="flex justify-center w-[300px]">
                <Image
                  src="/images/sectionfour/Content10.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Email Verification
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsTen.map((text, i) => (
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
          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Confirm Business Registration
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletswleven.map((text, i) => (
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
                  src="/images/sectionfour/Content11.png"
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
                  src="/images/sectionfour/Content12.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Location Information
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletswtwelve.map((text, i) => (
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
          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Mobile Number Verification
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsthirteen.map((text, i) => (
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
                  src="/images/sectionfour/Content13.png"
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
                  src="/images/sectionfour/Content14.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Password Creation
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsfourteen.map((text, i) => (
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
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Document Submission
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsfifteen.map((text, i) => (
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
                  src="/images/sectionfour/Content15.png"
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
                  src="/images/sectionfour/Content16.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-auto h-auto"
                />
              </div>

              {/* Right content */}
              <div className="mt-12">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  ID photo submission
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletssisteen.map((text, i) => (
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
          <section id="How-to-Join" className="scroll-mt-28">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="mt-10">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Final Document Submission
                </h3>
                <ul className="space-y-4 text-[#878787] text-[10px]">
                  {resellerBulletsseventeen.map((text, i) => (
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
                  src="/images/sectionfour/Content17.png"
                  alt="Reseller program"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </section>
          {/* 2 */}
          <section id="kyc-process-explained" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              {/* Left column (Text) */}
              <div className="mt-0">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4 mt-10">
                  Some Additional KYC Requirements
                </h3>

                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Affiliation URL / Screenshot showing affiliation
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  This requirement is related to LOB verification.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  URL/Screenshot needs to be from the AH&apos;s website, where
                  they promote their services.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  If the AH doesn&apos;t have a website, they can provide the
                  social media or freelancer platform page where they promote
                  themselves (e.g. Upwork).
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  Requirement: Screenshot of the customer&apos;s profile/account
                  showing user name/store name, URL or logo of website and
                  profile details of AH such as full name, Phone number, email
                  address
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  If they were also asked to provide a URL affiliation, then
                  they should provide a link to a page within AH&apos;s website,
                  basically showing that AH has the ability to edit the website
                  and add details to it. The affiliation URL can sometimes be
                  accepted in the form of a screenshot.{" "}
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  Autologger for Affiliation Screenshot:{" "}
                  <a className="text-blue-600" href="">
                    Autologger 7650
                  </a>{" "}
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    Text to A
                  </a>{" "}
                </p>
                {/* Business Profile */}
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Business Profile / Merchant Application Form (MAF)
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  The Business Profile it is also called Merchant application
                  form (MAF) and required for LOB verification when an AH is
                  receiving payments via the Payment Request Service.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  AHs will be requested to provide their Business profile when
                  they opt-in for the PRQ service
                </p>
                {/* Held ID */}
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Held ID
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  This requirements is related to identity verification.{" "}
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  The Held ID photo must show the AH holding a piece of paper
                  with the day&apos;s date on it.{" "}
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  The picture should be clear and easy to see the paper that the
                  AH is holding, with their face unobscured and make sure the
                  picture is not mirrored or reversed.
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-2 text-[12px]">
                  <a className="text-blue-600" href="">
                    Text - Request for ID and Held ID
                  </a>
                </p>
                {/* Invoice */}
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Invoice
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  This requirement is related to LOB verification.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  The AH needs to provide the invoice they have sent to their
                  client and that is related to the payment. It must include:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>Information about the services provided </li>
                  <li>The names of the buyer (payer) and seller (AH) </li>
                  <li>The amount for payment</li>
                </ul>
                {/* Invoice For Alias Review */}

                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Invoice (For Alias Review)
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  Invoice is the document issued by a seller with the list of
                  goods or services provided.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  The valid document must contain the original seller&apos;s
                  name, the buyers name and the general description of the
                  products. The document must show a connection to customer:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>Alias name is matching</li>
                  <li>
                    One of the affiliation items matched with BO information:
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>Verified Phone number</li>
                      <li>Customer&apos;s name</li>
                      <li>Email address</li>
                    </ul>
                  </li>
                </ul>
                {/* Visual identity verification (Selfie) */}
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Visual identity verification (Selfie)
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  This requirements is related to identity verification.
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  Payoneer accepts Selfies as &apos;Visual Identity
                  Verification&apos;. When a selfie requirement is opened, there
                  are also 2 other requirements:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400">
                  <li>Internal Selfie Information </li>
                  <li>ID </li>
                </ul>
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  Please note that they are part of the overall selfie
                  requirement and we should not manually upload anything to
                  these requirements or review (give review status) to them.
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  They should be completed by AH and reviewed by KYC only.
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]">
                  How submission looks like for customer:
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  1. When Selfie is requested, it appears as a requirement
                  called &apos;Visual identity verification&apos;{" "}
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  2. After a customer clicks on it, they are directed to a
                  &apos;Selfie submission wizard&apos;
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  3. They have to choose the country and type of their ID
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  4. Then they have to make a photo of their ID (if required for
                  the document type & country - both sides) 
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  5. And finally they have to make a selfie
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px]">
                  <a className="text-blue-600" href="">
                    Text to customer - How to submit a Selfie (Visual Identity
                    Verification)
                  </a>
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]">
                  If the customer would like to opt out from the service, refer
                  to the How can an AH opt-out of the &apos;Selfie&apos;
                  requirement (Visual Identity Verification) section in the How
                  to handle documents guide.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
