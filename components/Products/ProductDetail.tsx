"use client";
import { Product } from "../../constants/ProductsData";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "@/utility/Animation";

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <section className="pt-15  pb-15 bg-[#e9edf5]">
            <div className="container pt-10 md:pt-25 h-[100vh] lg:h-[70vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:gap-10">
                    <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                        <motion.h1 
                        variants={SlideRight(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl font-bold text-center md:text-start text-orange-600 uppercase mb-5">
                            {product.title}
                        </motion.h1>
                        <motion.p 
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        animate="visible"
                        className="text-gray-700">{product.desc}</motion.p>
                    </div>
                    <motion.div 
                    variants={SlideLeft(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center items-center">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="w-auto h-auto object-cover max-w-lg mx-auto rounded-md mb-4"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;