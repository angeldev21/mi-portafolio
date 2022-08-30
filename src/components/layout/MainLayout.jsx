import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialNetworks from "./SocialNetworks";

import { FiArrowUp } from "react-icons/fi";

const MainLayout = ({ children }) => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let coors = window.scrollY;
      if (coors >= 100) {
        setIsScrollTop(false);
      } else {
        setIsScrollTop(true);
      }
    });
  }, [isScrollTop]);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed hidden md:block bottom-0 ml-12 after:content-[''] after:h-24 after:w-px after:block after:bg-gray-300 after:mx-auto after:mt-5 after:bg-opacity-20"
      >
        <SocialNetworks direction="col"/>
      </motion.aside>
      <div className="-right-7 md:right-0 bottom-0 fixed mr-12 duration-200">
        {!isScrollTop && (
          <button
            className="p-3 mb-4 border border-gray-300 border-opacity-20 rounded-lg animate-bounce"
            onClick={handleToTop}
          >
            <FiArrowUp size={35} />
          </button>
        )}
      </div>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
