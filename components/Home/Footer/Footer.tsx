import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { FaCanadianMapleLeaf, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#9CA3AF]">
      <div className="container">
        <div className="grid md:grid-cols-3 md:gap-4 py-5  text-white/80">
          {/* Brand Info Section */}
          <div className="py-8 px-4 space-y-4">
            <div className="flex items-center space-x-2">
              {/* Icon (Maple Leaf) with some styling */}
              <FaCanadianMapleLeaf className="text-3xl text-green-500" />

              {/* Name next to logo */}
              <span className="text-xl font-semibold text-gray-800">
                My Company
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              aspernatur laborum aliquid consequatur nam autem accusantium
              recusandae ipsa magnam reprehenderit.
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#" className="hover:text-[#0063ff] duration-200">
                <FaLocationDot className="text-3xl" />
              </a>
              <a href="#" className="hover:text-[#0063ff] duration-200">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="hover:text-[#0063ff] duration-200">
                <FaInstagramSquare className="text-3xl" />
              </a>
              <a href="#" className="hover:text-[#0063ff] duration-200">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Footer Links */}
          <div className=" md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-[#0063ff]">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-[#0063ff] duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0063ff] duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0063ff] duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0063ff] duration-200">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0063ff] duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Address Section */}
          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-[#0063ff]">
                Connect With Us
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-2 items-center hover:text-[#0063ff]">
                  <FaPhoneAlt />
                  <p>+91 9452486872</p>
                </li>
                <li className="flex gap-2 items-center hover:text-[#0063ff]">
                  <IoIosMail />
                  <p>companyname@gmail.com</p>
                </li>
                <li className="flex gap-2 items-start hover:text-[#0063ff]">
                  <FaLocationDot />
                  <p className="w-50">
                  1128 Elmwood Drive, Springfield, IL 62704, USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CopyRight Section */}
        <div className="py-5 border-t-2 border-gray-600">
          <div className="text-sm flex items-center md:justify-center gap-1">
            <p>Copyright</p>
            <FaRegCopyright className="text-sm" />
            <p>2025 Companyname. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
