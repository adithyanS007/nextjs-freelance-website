"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ProductsData } from "@/constants/ProductsData";


const ProductsSlider = () => {
    const setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <section className="py-10">
            <div className="container ">
                <div >
                    <Slider {...setting}>
                        {ProductsData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex flex-col md:w-55 lg:w-70 gap-4 p-8 shadow-lg mx-4 rounded-xl mb-5">
                                        {/* Upper Section */}
                                        <div className="flex justify-center items-center gap-8">
                                            <Image 
                                            src={item.image} 
                                            alt="Product Images" 
                                            width={800} 
                                            height={800} 
                                            className="w-[150px] h-[150px]"
                                            />
                                        </div>
                                        {/* Bottom Section */}
                                        <div className="flex-justify-center items-center">
                                            <p className="text-center text-sm md:text-md font-semi-bold text-black/80">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ProductsSlider;
