"use client";
import React from "react";
import { Product } from "../../constants/ProductsData";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

const slugify = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter();

    return (
        <section className="flex justify-center items-center">
            <div className="h-full w-60 border border-gray-200 rounded-lg custom-shadow p-4 text-center hover:shadow-lg">
                <div className="flex justify-center items-center">
                    <div className="w-[200px] h-[200px] ">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={600}
                            className="w-full h-full object-contain rounded-md mb-2"
                        />
                    </div>
                </div>
                <h2 className="text-sm font-semibold text-gray-500 pt-5 pb-5 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.title}
                </h2>
                <button
                    onClick={() => router.push(`/products/${slugify(product.title)}`)}
                    className="mt-2 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-[#2098ca] hover:text-white"
                >
                    Read More
                </button>
            </div>
        </section>
    );
};

export default ProductCard;
