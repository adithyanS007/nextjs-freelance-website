"use client";
import { servicesData } from "@/constants/servicesData";
import { SlideDown, SlideRight, SlideUp } from "@/utility/Animation";
import { motion } from "framer-motion";

export interface ServiceItem {
    title: string;
    subtitle?: string | null;
    description: string;
    subhead?: string;
    subhead2?: string;
    points?: string[];
    benefits?: string[];
    compliance?: string;
}

const Services = () => {
    return (
        <section className="container relative mt-20 md:mt-30 lg:mt-35 pb-10">
            <div className="flex flex-col items-center justify-center">
                <motion.h2
                    variants={SlideDown(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-6 text-orange-600 text-center "
                >
                    OUR SERVICES
                </motion.h2>
                <motion.h3
                    variants={SlideDown(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl font-bold text-primary mb-4"
                >
                    Clean Water, Clear Solutions
                </motion.h3>
                <motion.p 
                variants={SlideUp(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="text-gray-600 leading-loose text-center mb-5 md:text-left max-w-7xl">
                    At Companyname The Water Experts, we are committed to delivering top-notch water purification solutions
                    that cater to residential, commercial, and industrial needs. Established in 2008, our team of dedicated
                    engineers and water treatment professionals brings over a decade of experience in ensuring the water you
                    use is pure, safe, and sustainable. We combine innovation with industry best practices to offer
                    reliable, efficient, and eco-friendly water treatment systems tailored to your specific needs.
                </motion.p>
                <motion.p 
                variants={SlideUp(1.0)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="hidden md:block text-gray-600 leading-loose mb-8 text-center md:text-left max-w-7xl">
                    At Companyname The Water Experts, we are committed to delivering top-notch water purification solutions
                    that cater to residential, commercial, and industrial needs. Established in 2008, our team of dedicated
                    engineers and water treatment professionals brings over a decade of experience in ensuring the water you
                    use is pure, safe, and sustainable. We combine innovation with industry best practices to offer
                    reliable, efficient, and eco-friendly water treatment systems tailored to your specific needs.
                </motion.p>
            </div>

            {/* All Services */}
            <div className="grid grid-cols gap-10 mt-10">
                {servicesData.map((service, index) => (
                    <motion.div
                        variants={SlideRight(0.3)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        key={index}
                        className="p-6 border rounded-xl shadow-sm bg-white"
                    >
                        <h4 className="text-xl font-semibold text-orange-600 mb-1">{service.title}</h4>

                        {service.subtitle && <h5 className="text-md font-medium text-primary mb-2">{service.subtitle}</h5>}

                        <p className="text-gray-700 mb-3">{service.description}</p>

                        {service.subhead && (
                            <p className="font-semibold text-sm text-gray-800 mt-3 mb-1">{service.subhead}</p>
                        )}

                        {service.points && service.points.length > 0 && (
                            <ul className="list-disc list-inside text-gray-600 mb-3">
                                {service.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {service.subhead2 && (
                            <p className="font-semibold text-sm text-gray-800 mt-3 mb-1">{service.subhead2}</p>
                        )}

                        {service.benefits && service.benefits.length > 0 && (
                            <ul className="list-disc list-inside text-gray-600 mb-3">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        )}

                        {service.compliance && (
                            <p className="text-sm text-green-700 font-medium mt-2">✅ {service.compliance}</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
