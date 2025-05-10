"use client";

import { useEffect, useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from "@/constants/ConstData";
import ResponsiveMenu from "./ResponsiveMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const pathname = usePathname(); // Get the current route

  // Ensure this runs only on the client-side
  useEffect(() => {
    const handler = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handler);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] ${
          navBg ? "bg-white shadow-md" : ""
        }`}
      >
        <div className="container flex justify-between items-center py-5">
          {/* Logo section */}
          <div className="flex items-center space-x-2">
            {/* Icon (Maple Leaf) with some styling */}
            <FaCanadianMapleLeaf className="text-3xl text-green-500" />

            {/* Name next to logo */}
            <span className="text-xl font-semibold text-gray-800">
              My Company
            </span>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`${
                      pathname === item.link
                        ? "text-white font-bold bg-secondary rounded-full hover:text-white" // Active link styling
                        : "text-gray-900 font-semibold"
                    } inline-block text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-blue-600 transition-all duration-300`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold bg-secondary text-white rounded-full px-6 py-2">
              Get Started
            </button>
          </div>

          {/* Mobile hamburger section */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
