"use client";
import React from "react";
import Banner from "../assets/Hero-header.png";

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover pt-16"
      style={{ backgroundImage: `url(${Banner.src})` }}
      aria-label="Welcome to Payoneer"
    >
      <div className="h-full max-w-5xl mx-auto px-4 flex items-start pt-24 sm:pt-24">
        <div className="text-center w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
            Welcome to <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Payoneer
            </span>
          </h1>

          <p className="mt-5 mx-auto max-w-[720px] text-base sm:text-lg leading-relaxed text-gray-700">
            Your exclusive platform for everything you need from detailed guides
            on ordering new cards to tips on maximizing Payoneer products and
            staying updated on our latest services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
