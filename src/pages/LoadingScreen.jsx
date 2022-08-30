import { motion } from "framer-motion";

import logo from "../assets/logo.svg";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.img
        src={logo}
        className="w-40"
        transition={{ repeat: Infinity, duration: .8 }}
        animate={{ opacity: [1, 0] }}
      />
    </div>
  );
};

export default LoadingScreen;
