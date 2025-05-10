"use client";
import Slider from "react-slick";
import { TestimonialItem, TestimonialsData } from "@/constants/TestimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { SlideRight } from "@/utility/Animation";
import Link from "next/link";


const Testimonials = () => {
    const setting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-14 mb-10">
            <div className="container">
                {/* Header Section */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
                    <motion.h1
                        variants={SlideRight(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        className="uppercase font-semibold text-orange-600 text-4xl"
                    >
                        OUR TESTIMONIALS
                    </motion.h1>
                    <motion.p
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="font-semibold text-2xl"
                    >
                        What Our Clients Says About Us
                    </motion.p>
                </div>
                {/* Testimonial Card Section */}
                <div>
                    <Slider {...setting}>
                        {TestimonialsData.map((item: TestimonialItem) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.id}>
                                    <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-blue-100 mb-4">
                                        {/* Upper Section */}
                                        <div className="flex justify-start items-center gap-4">
                                            <div className="text-2xl mb-10 text-secondary">{Icon && <Icon />}</div>
                                            <div className="">
                                                <p className="text-xl font-bold text-black/80">{item.name}</p>
                                                <p>{item.contact}</p>
                                            </div>
                                        </div>
                                        {/* Bottom Section */}
                                        <div className="py-5 space-y-4">
                                            <p className="text-sm text-gray-500">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className="flex justify-center items-end mt-4">
                        <Link href="/about">
                            <button className="primary-btn bg-secondary !mt-5 items-center">Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
