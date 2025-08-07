"use client";
import React from "react";
import Link from "next/link";

type LinkItem = { label: string; slug: string };
type Card = {
  title: string;
  items: Array<string | LinkItem>;
  viewAllHref: string;
};

const cards: Card[] = [
  {
    title: "Welcome to the Payoneer Reseller Program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why Partner with Us", slug: "why-partner" }, // match <section id="why-partner">
      { label: "Reseller Program Overview", slug: "reseller-overview" }, // match <section id="reseller-overview">
      { label: "Success Stories & Testimonials", slug: "key-features" }, // only if you have this section id
    ],
    viewAllHref: "/reseller",
  },
  {
    title: "Getting Started: Partner Onboarding",
    items: [
      { label: "How to Join the Program", slug: "How-to-Join" },
      {
        label: "Understand Your Role as a Payoneer Reseller",
        slug: "Understand-Your-Role",
      },
      {
        label: "Understanding Partner Tiers",
        slug: "Understanding-Partner-Tiers",
      },
      {
        label: "Understanding Commercials & Payment Calculators",
        slug: "Payment-Calculators",
      },
    ],
    viewAllHref: "/program",
  },
  {
    title: "Partner Activation & Enablement",
    items: [
      { label: "Sales Enablement Tools", slug: "sales-enablement-tools" }, // match <section id="why-partner">
      {
        label: "Marketing & Reselling Guidelines",
        slug: "reselling-guidelines",
      }, // match <section id="reseller-overview">
      { label: "Success Stories & Testimonials", slug: "onboarding-overview" }, // only if you have this section id
    ],
    viewAllHref: "/Sectionthree",
  },
  {
    title: "Referred Account Holder (AH) Onboarding Journey",
    items: [
      {
        label: "Account Sign-Up Process for Referred Account Holders",
        slug: "referred-account-holders",
      },
      { label: "CLM Flow", slug: "clm-flow" }, // match <section id="why-partner">
      { label: "KYC Process", slug: "kyc-process-explained" }, // match <section id="reseller-overview">
    ],
    viewAllHref: "/Sectionfour",
  },
  {
    title: "Supporting Your Referred Account Holders (AHs)",
    items: ["Frequently Asked Questions (FAQs)"],
    viewAllHref: "/Sectionfive",
  },
];

const ContentCards: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              {card.title}
            </h3>

            <ul className="text-sm text-gray-600 space-y-1">
              {card.items.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    <Link
                      href={`${card.viewAllHref}#${item.slug}`}
                      className="text-[#878787] hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <Link
              href={card.viewAllHref}
              className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline"
            >
              View all →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentCards;
