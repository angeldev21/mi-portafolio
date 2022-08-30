import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin, FiUser } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import LinkButton from "./layout/LinkButton";
import Section from "./layout/Section";
import SendEmail from "./SendEmail";

const Contact = () => {
  return (
    <Section title="Contacto" id="contact">
      <article className="md:grid grid-cols-2 gap-x-10">
        <div className="flex flex-col w-max gap-5 mx-auto">
          <LinkButton
            icon={<FiLinkedin size={20} />}
            text="Linkedin"
            href="https://www.linkedin.com/in/angel-baez-99918620b/"
          />
          <LinkButton
            icon={<MdOutlineEmail size={20} />}
            text="Correo Electrónico"
            href="mailto:dev.angelbaez@gmail.com"
          />
          <LinkButton
            icon={<BsWhatsapp size={20} />}
            text="# De Teléfono"
            href="https://wa.me/5613427963"
          />
          <LinkButton
            icon={<FiUser size={20} />}
            text="Mi CV"
            href="https://drive.google.com/file/d/1Y7diTCjKElv9wrE4YAEmKvQEMZapAntF/view?usp=sharing"
          />
        </div>
        <div>
          <SendEmail />
        </div>
      </article>
    </Section>
  );
};

export default Contact;
