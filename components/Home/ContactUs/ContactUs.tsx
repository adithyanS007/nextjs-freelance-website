"use client";
import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "@/utility/Animation";

const ContactUs = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side-only logic runs after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row p-8 bg-blue-100/40">
      <div className="container flex justify-center items-center flex-col md:flex-row gap-4 lg:gap-18 p-5 rounded-lg">
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <ul className="space-y-4">
            <div className="flex flex-start justify-center items-center md:w-[320px] lg:w-[450px] md:mb-[6rem] lg:mb-[8rem]">
              {isClient && (
                <motion.h1
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl text-center md:text-start font-bold text-orange-600 leading-relaxed"
                >
                  Reach Out and Help Us Make the Earth a Better Home for All!
                </motion.h1>
              )}
            </div>
            {isClient && (
              <motion.li
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm md:text-xl"
              >
                <FaPhoneAlt className="w-10 h-10 md:w-14 md:h-14 text-orange-400" />
                <p className="text-gray-500">+91 2255421154</p>
              </motion.li>
            )}
            {isClient && (
              <motion.li
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm md:text-xl"
              >
                <IoIosMail className="w-10 h-10 md:w-16 md:h-16 text-orange-400" />
                <p className="text-gray-500">companyname@gmail.com</p>
              </motion.li>
            )}
          </ul>
        </div>

        {/* Right Section - Form */}
        {isClient && (
          <motion.div
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-green-300 p-6 rounded-xl max-w-[550px]"
          >
            <h2 className="text-2xl md:text-4xl text-center font-bold text-orange-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-6">
              Send Us a Message and Let's Schedule a Call!
            </p>
            <form action="" className="space-y-4">
              <div className="grid md:grid-cols-1 gap-4">
                <input
                  id="name"
                  type="text"
                  required
                  className="bg-blue-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Name"
                />
                <input
                  id="email"
                  type="text"
                  required
                  className="bg-blue-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Email"
                />
                <input
                  id="phone"
                  required
                  type="tel"
                  className="bg-blue-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Phone"
                />
              </div>
              <textarea
                required
                className="w-full bg-blue-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Message..."
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-400 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
