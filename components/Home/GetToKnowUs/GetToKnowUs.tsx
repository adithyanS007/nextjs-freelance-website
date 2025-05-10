'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideUp } from "@/utility/Animation";


// Props Type
type GetToKnowUsProps = {
  image: string;
  tag: string;
  title: string;
  desc: string;
  link: string; 
  reverse?: boolean;
};

// Component
const GetToKnowUs: React.FC<GetToKnowUsProps> = ({  image, tag, title, desc, link, reverse,}) => {
  return (
    <section className="bg-[#f9f9f9] pb-14 pt-15 ">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:gap-10">
          {/* Image Section */}
          <motion.div 
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{type: "spring", stiffness: 100, delay: 0.2}}
          className={`flex justify-start items-center ${
            reverse && "md:order-last md:justify-end"          //if need change to justify-center
          }`}>
            <Image
              src={image}
              alt="Get To Know Us"
              width={150}
              height={100}
              className="object-cover rounded-md md:gap-10 h-full w-[400px]"
            />
          </motion.div>
          {/* Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p 
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            className="text-4xl text-orange-500 font-semibold capitalize">{tag}</motion.p>
            <motion.h2 
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            className="text-xl lg:text-2xl font-semibold capitalize">
              {title}
            </motion.h2>
            <motion.p 
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            className="text-sm text-slate-500 ">{desc}</motion.p>
            <motion.div 
            variants={SlideUp(1.1)}
            initial="hidden"
            whileInView={"visible"}
            className="flex justify-center md:justify-start">
              <Link href={link}>
                <button className="primary-btn bg-secondary !mt-5">
                  Read more
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;