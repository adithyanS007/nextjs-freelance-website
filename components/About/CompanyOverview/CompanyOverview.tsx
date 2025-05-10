"use client";
import Image from "next/image";
import React from "react";

// Define the component as a React Functional Component (React.FC)
const CompanyOverview: React.FC = () => {
  return (
    <section className="container relative md:mt-30 lg:mt-38 mt-20 pb-10">
      {/* Outer Wrapper */}
      <h2 className="text-3xl font-bold mb-8 text-orange-600">Company Overview</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-y-0 gap-5">
        {/* Left Section */}
        <div className="flex-1 md:w-3/4 text-start md:text-left space-y-6">
          <p className="text-gray-600 leading-loose">
            At our company, established in 2008, has quickly emerged as a leader in the water treatment industry.
            As a nature-friendly organization, we specialize in providing innovative solutions that address
            residential, commercial, and industrial water challenges. Backed by a team of professional engineers
            dedicated to design, development, research, and exceptional after-sale services, we aim to deliver
            crystal-clear, safe water from any source with efficiency and reliability.
          </p>
          {/* Hidden content - only visible on large screens */}
          <p className="hidden lg:block text-gray-600 leading-loose">
            Our commitment to sustainability drives us to develop eco-friendly systems that minimize
            environmental impact while ensuring top-notch performance. By leveraging cutting-edge technologies,
            we address common issues like hard water, contaminant removal, and waste reduction. With every
            project, we emphasize energy efficiency and compliance with the highest industry standards, creating
            solutions that balance functionality with environmental responsibility. Our innovative approach
            ensures that water treatment systems are both cost-effective and durable. We also integrate smart
            technologies to enhance operational efficiency and reduce resource consumption. By continuously
            evolving our methods, we aim to lead the industry in sustainable water management practices.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/4 md:w-1/3">
          <Image
            src="/images/AboutImg.png"
            alt="About Image"
            width={400}
            height={400}
            className="object-cover rounded-md h-auto w-auto"
          />
        </div>
      </div>
      <div className="w-full mt-5 md:mt-0 lg:mt-5">
        <p className="text-gray-600 leading-loose w-full">
          At Companyname, customer satisfaction is at the core of everything we do. We take pride in building
          lasting relationships through personalized support and tailored solutions that exceed expectations.
          Together with our clients, we contribute to global water conservation efforts and strive toward a
          sustainable future where clean water is accessible to all. Discover the Companyname difference—where
          technology meets dedication and expertise. Our commitment extends beyond products; we focus on
          empowering our clients with knowledge and resources to address water challenges effectively. By
          fostering trust and innovation, we aim to create lasting impacts that resonate for generations.
        </p>
      </div>
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-10">
        <div className="mb-4">
          <Image 
            src='/images/HeroImg3.png'
            alt="Profile Image"
            width={200}
            height={133}
            className="rounded object-cover h-auto w-auto"
          />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-lg">Name</h2>
          <p className="text-gray-600">Managing Director, Companyname</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;