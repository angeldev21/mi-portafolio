import { motion } from "framer-motion";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuToggle = ({ onClick, close }) => {
  return (
    <motion.button className="md:hidden relative z-20 mr-3" onClick={onClick}>
      {close ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
    </motion.button>
  );
};

export default MenuToggle;
