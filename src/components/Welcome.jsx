import { motion } from "framer-motion";

import LinkButton from "./layout/LinkButton";
import Container from "./layout/Container";

const Welcome = () => {
  return (
    <Container>
      <section className="h-screen flex items-center font-system-ui">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-7 text-sky-400 font-normal text-base md:text-xl font-fira-code"
          >
            Hola, mi nombre es
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-black text-4xl md:text-7xl text-gray-300"
          >
            Ángel Báez.
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-extrabold text-3xl md:text-6xl text-gray-400 mt-3"
          >
            Desarrollador Web FrontEnd.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="max-w-lg mt-8 mb-12 text-base md:text-xl text-gray-300"
          >
            Soy Ingeniero en Desarrollo de Software Multiplataforma que se
            especializa en crear soluciones web.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <LinkButton
              text="Conóceme Más"
              href="https://drive.google.com/file/d/1Y7diTCjKElv9wrE4YAEmKvQEMZapAntF/view?usp=sharing"
            />
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Welcome;
