import { FaQuoteLeft } from "react-icons/fa6";

export interface TestimonialItem {
  id: number;
  name: string;
  contact: string;
  text: string;
  icon: React.ComponentType;
  link: string;
  delay: number;
}
//Testimonial Data
export const TestimonialsData: TestimonialItem[] = [
    {
        id: 1,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Exceptional quality and service! Our water is now pure and tastes amazing. The team ensured a smooth setup and excellent follow-up support.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Healthier, cleaner water has transformed our lives! The purifier is user-friendly, efficient, and delivers consistently great results.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.3,
    },
    {
        id: 3,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Affordable and reliable solution! We love the purity and fresh taste of the water—installation was quick and hassle-free.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.4,
    },
    {
        id: 4,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Sleek design and excellent performance! The water quality has improved so much that it's now a staple for drinking and cooking.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.5,
    },
    {
        id: 5,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Innovative technology with noticeable results! The purified water feels fresher, safer, and perfect for everyday use.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.6,
    },
    {
        id: 6,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Fantastic service and outstanding durability! The system blends seamlessly into our home and provides peace of mind.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.7,
    },
    {
        id: 7,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Compact, efficient, and easy to use! We’re thrilled by the difference it has made in the clarity and taste of our water.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.8,
    },
    {
        id: 8,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Reliable purifier with hassle-free maintenance! The water quality is consistently superb, and it's an excellent addition to our home.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 0.9,
    },
    {
        id: 9,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Crystal-clear and safe drinking water every day! The purifier combines efficiency with elegance in a reliable package.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 1.0,
    },
    {
        id: 10,
        name: "Stephen Jose",
        contact: "Los Angeles",
        text: "Impressive quality and effortless installation! The purified water tastes fresh, and their after-sales service is exceptional.",
        icon: FaQuoteLeft,
        link: "/about",
        delay: 1.1,
    },
];

