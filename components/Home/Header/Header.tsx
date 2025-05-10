"use client";
import { motion } from "framer-motion";
import { SlideRight } from "@/utility/Animation";
import Image from "next/image";

const Header = () => {
    return (
        <section className="min-h-[670px] bg-no-repeat bg-cover bg-center relative overflow-hidden">
            {/* Replace bg-hero-image with Image component */}
            <Image
                src="/images/bgimage.jpg"
                alt="Hero Background"
                fill
                priority
                quality={100}
                className="object-cover z-0"
            />

            {/* Overlay and content */}
            <div className="container min-h-[670px] absolute bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10">
                <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-18 pt-15 mt-10">
                    <div className="text-center md:text-left space-y-6 lg:mt-18 mt-18 pb-10 max-w-[608px]">
                        <motion.p
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="text-green-600 uppercase font-semibold"
                        >
                            100% Satisfaction Guarantee
                        </motion.p>
                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl font-semibold lg:text-6xl !leading-tight"
                        >
                            Your Path to Pure <span className="text-secondary">Water</span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="text-white/70 lg:text-lg"
                        >
                            Our water experts are dedicated to delivering clean, safe, and purified water using advanced
                            purification technology. With years of experience, we provide tailored solutions that ensure the
                            highest standard of water quality for your home or business.
                        </motion.p>
                        {/* button section */}
                        <motion.div
                            variants={SlideRight(1.0)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center md:justify-start !mt-8 items-center"
                        >
                            <button className="primary-btn ">Contact Us Now</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
