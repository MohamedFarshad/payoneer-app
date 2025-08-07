"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/30 shadow-md border-b border-white/20">
        <div className="relative px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <div className="flex items-center space-x-4">
              <Image src={Logo} alt="Logo" width={100} height={30} />

              {/* Desktop Links */}
              <div className="hidden md:flex space-x-6 text-sm text-black font-medium">
                <a href="#" className="hover:text-black">
                  Home
                </a>
                <a href="#" className="hover:text-black">
                  Resource hub
                </a>
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-black">
                    <span>Forum</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hamburger on Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 text-sm text-black font-medium pb-4">
              <a href="#" className="block hover:text-black">
                Home
              </a>
              <a href="#" className="block hover:text-black">
                Resource hub
              </a>
              <div>
                <span className="block hover:text-black">Forum</span>
                <div className="ml-4 mt-1 space-y-1">
                  <a href="#" className="block hover:text-black text-gray-600">
                    Option 1
                  </a>
                  <a href="#" className="block hover:text-black text-gray-600">
                    Option 2
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
