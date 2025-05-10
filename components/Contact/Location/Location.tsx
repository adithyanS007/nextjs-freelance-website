"use client";
import React from "react";

const Location = () => {
    return (
        <section className="container mt-20 md:mt-30 lg:mt-35">
        <div className="px-4 py-10  mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-10">
                {/* Left: Contact Info */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold text-orange-600 pb-7">OFFICE ADDRESS</h1>
                    <h2 className="text-2xl font-semibold text-secondary">Companyname The Water Experts</h2>
                    <p className="text-gray-600">1128 Elmwood Drive, Springfield, IL 62704, USA</p>
                    <p className="text-gray-600">
                        Email:{" "}
                        <a href="mailto:info@autumnrain.com" className="text-blue-300 hover:underline">
                            info@companyname.com
                        </a>
                    </p>
                    <p className="text-gray-600">
                        Phone:{" "}
                        <a href="tel:+919876543210" className="text-blue-300 hover:underline">
                            +91-9876543210
                        </a>
                    </p>
                </div>

                {/* Right: Map */}
                <div className="md:w-1/2 w-full h-72 md:h-100 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672351.2885651784!2d-118.87367320775957!3d33.96342908060151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1746846618732!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="border-0 w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Location;
