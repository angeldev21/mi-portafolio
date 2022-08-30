import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import logo from "../../assets/logo.svg";
import MenuToggle from "./MenuToggle";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "50%" },
};

const Navbar = () => {
  const [scrollTo, setScrollTo] = useState("top-0");
  const [closeNav, setCloseNav] = useState(true);

  const tablet = useMediaQuery({ query: "(min-width: 768px" });

  const aForNavbar = [
    {
      text: "Sobre Mi",
      href: "#about",
    },
    {
      text: "Habilidades",
      href: "#skills",
    },
    {
      text: "Proyectos",
      href: "#projects",
    },
    {
      text: "Contacto",
      href: "#contact",
    },
  ];

  //Evitar que se pueda hacer scroll cuando la navegacion esta abierta
  if (!closeNav) {
    document.querySelector("body").classList.add("overflow-hidden");
  } else {
    document.querySelector("body").classList.remove("overflow-hidden");
  }
  //####################################################################

  //Abrir y cerrar la navegacion
  const handleOpenCloseNav = () => {
    setCloseNav(!closeNav);
  };

  //Cada vez que la pantalla cambia de tamaño se cierra la navegacion
  useEffect(() => {
    setCloseNav(true);
  }, [tablet]);
  //####################################################################

  //Al hacer scroll hacia arriba se muestra de nuevo la navegacion
  let ubicationPrincipal = window.scrollY;
  let displacementCurrent;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      displacementCurrent = window.scrollY;
      if (ubicationPrincipal >= displacementCurrent) {
        setScrollTo("top-0");
      } else {
        setScrollTo("-top-20");
      }
      ubicationPrincipal = displacementCurrent;
    });
  }, [ubicationPrincipal, displacementCurrent]);
  //####################################################################

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className={`${scrollTo} h-20 px-2 md:px-12 mx-auto flex items-center rounded-lg fixed right-0 left-0 w-full bg-slate-900 bg-opacity-95 duration-200 z-50`}
      id="navbar"
    >
      <nav className="relative flex items-center justify-between w-full bg-opacity-20">
        <img src={logo} style={{ width: 40, height: 40 }} className="z-40" />
        <MenuToggle close={closeNav} onClick={handleOpenCloseNav} />
        <motion.ul
          animate={!tablet && closeNav ? "closed" : "open"}
          variants={variants}
          onClick={() => setCloseNav(true)}
          className={`${
            closeNav ? "hidden" : "flex"
          } md:flex flex-col absolute md:relative justify-around md:items-center md:justify-end -top-5 md:top-0 right-0 pt-20 pb-36 md:p-0 w-5/6 md:w-full h-screen md:h-auto gap-y-28 bg-slate-800 md:bg-slate-900 md:flex-row gap-x-6 font-fira-code font-normal text-lg rounded-lg text-center md:bg-transparent z-10 before:content-[' '] before:w-[120%] before:block before:absolute before:bg-slate-800 before:h-[120vh] before:-z-50 before:-left-full before:bg-opacity-80 md:before:hidden`}
        >
          {aForNavbar.map((a, i) => (
            <li key={i}>
              <a
                className="underline duration-200 hover:text-sky-400 md:no-underline underline-offset-8 md:hover:underline md:hover:underline-offset-8"
                href={a.href}
              >
                {a.text}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
