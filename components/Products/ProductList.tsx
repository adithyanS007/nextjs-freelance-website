"use client";
import React, { useState } from "react";
import { ProductsData } from "../../constants/ProductsData";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "@/utility/Animation";

const ProductList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const paginatedProducts = ProductsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="bg-[#f9f9f9] pb-14 pt-15 lg:mt-20">
            <div className="container py-8 mt-8">
                <div>
                    <motion.h1
                        variants={SlideRight(0.3)}
                        initial="hidden"
                        animate="visible"
                        className="text-center md:text-left text-orange-600 font-bold mb-8 text-4xl"
                    >
                        PRODUCTS
                    </motion.h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {paginatedProducts.map((product, index) => (
                        <motion.div
                            key={product.title}
                            variants={SlideLeft(index * 0.2)} // stagger animation
                            initial="hidden"
                            animate="visible"
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalItems={ProductsData.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </section>
    );
};

export default ProductList;
