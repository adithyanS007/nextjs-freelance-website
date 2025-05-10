'use client';
import { TestimonialItem, TestimonialsData } from "@/constants/TestimonialData";
import { useState } from "react";
import Pagination from "./Pagination";

const TestimonialsPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Only fetch the current page's data
    const paginatedProducts = TestimonialsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="container relative md:mt-30 lg:mt-35 mt-20 pb-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Why Our Customers Trust Us</h1>
                <p className="text-gray-600 leading-loose text-center mb-5 md:text-left max-w-7xl">
                    At Companyname, we pride ourselves on delivering quality and reliability to our customers. 
                    With a commitment to excellence, we strive to meet and exceed expectations every step of the way. 
                    Below are some of the glowing testimonials from our satisfied clients, showcasing the real impact 
                    of our products and services in their lives.
                </p>
            </div>

            {/* Grid for Paginated Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {paginatedProducts.map((item: TestimonialItem) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id}>
                            <div className="p-6 border-5 border-gray-500 hover:border-blue-300 bg-gray-50">
                                {/* Upper Section */}
                                <div className="flex justify-start items-center gap-4">
                                <div className="text-2xl mb-10 text-secondary">{Icon && <Icon />}</div>
                                    <div>
                                        <p className="text-xl font-bold text-black/80">{item.name}</p>
                                        <p>{item.contact}</p>
                                    </div>
                                </div>
                                {/* Text Section */}
                                <div className="py-4 space-y-2">
                                    <p className="text-sm text-gray-500">{item.text}</p>
                                </div>
                                {/* Bottom Section */}
                                <div className="text-sm text-gray-700">
                                    <p className="font-bold">{item.name}</p>
                                    <p>{item.contact}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Component */}
            <Pagination
                currentPage={currentPage}
                totalItems={TestimonialsData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </section>
    );
};

export default TestimonialsPage;