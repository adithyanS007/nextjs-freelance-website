"use client";
import React, { FC } from "react";
import { MdBuild } from "react-icons/md";
import { GiTestTubes, GiGearHammer } from "react-icons/gi";
import { FaUserCog, FaRegHandshake } from "react-icons/fa";
import { TbReplaceFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/utility/Animation";

// Define the type for each service
type ServiceItem = {
    id: number;
    title: string;
    desc: string;
    Link: string;
    icon: React.ReactNode; // Icons are React elements, so we use React.ReactNode
    bgColor: string;
    delay: number;
};

// Define the ServicesData array with the `ServiceItem` type
const ServicesData: ServiceItem[] = [
    {
        id: 1,
        title: "Free Consultation Services",
        desc: "Offering expert guidance to help you choose the best water purification solutions for your specific needs.",
        Link: "/",
        icon: <FaRegHandshake />,
        bgColor: "#73bc00",
        delay: 0.9,
    },
    {
        id: 2,
        title: "System Installation",
        desc: "Professional installation of residential, commercial, and industrial water filtration systems.",
        Link: "/",
        icon: <MdBuild />,
        bgColor: "#d4ac0d",
        delay: 0.3,
    },
    {
        id: 3,
        title: "Water Quality Testing",
        desc: "Testing and analysis of water to determine contamination levels and suggest purification solutions.",
        Link: "/",
        icon: <GiTestTubes />,
        bgColor: "#0063ff",
        delay: 0.9,
    },
    {
        id: 4,
        title: "Regular Maintenance & Servicing ",
        desc: "Scheduled routine maintenance services to ensure the filtration systems operate efficiently and reliably.",
        Link: "/",
        icon: <GiGearHammer />,
        bgColor: "#873600",
        delay: 0.6,
    },
    {
        id: 5,
        title: "Filter Replacement Services",
        desc: "Providing timely and reliable filter replacement services for all types of water purifiers, ensuring peak performance.",
        Link: "/",
        icon: <TbReplaceFilled />,
        bgColor: "#0b5345",
        delay: 0.9,
    },
    {
        id: 6,
        title: "Emergency Repair Services",
        desc: "24/7 emergency repair services for any breakdowns or malfunctions in water purifying systems.",
        Link: "/",
        icon: <FaUserCog />,
        bgColor: "#4a235a",
        delay: 0.9,
    },
];

// Component definition
const WhatSetsUsApart: FC = () => {
    return (
        <section className="bg-[#e9edf5]">
            <div className="container py-24">
                {/* Header section */}
                <div className="space-y-6 p-6 text-center max-w-[500px] mx-auto mb-5">
                    <motion.h1
                        variants={SlideUp(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="uppercase font-semibold text-[#1fcbff] text-3xl"
                    >
                        What Sets Us Apart
                    </motion.h1>
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="font-semibold text-xl"
                    >
                        Delivering excellence in water purification through innovation, reliability, and exceptional
                        service.
                    </motion.p>
                </div>
                {/* Card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ServicesData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={SlideLeft(item.delay)} // SlideLeft is typed from Framer Motion
                            initial="hidden"
                            whileInView="visible"
                            className="space-y-4 p-6 rounded-xl custom-shadow flex justify-center items-center flex-col"
                        >
                            {/* Icon section */}
                            <div
                                style={{ backgroundColor: item.bgColor }}
                                className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                            >
                                <div className="text-2xl">{item.icon}</div>
                            </div>
                            <p className="font-semibold text-center">{item.title}</p>
                            <p className="text-sm text-gray-500 text-center">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatSetsUsApart;
