'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NavbarMenu } from '@/constants/ConstData'; 

type ResponsiveMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-[#2098ca] text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#0063ff] transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
