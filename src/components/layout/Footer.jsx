import Container from "./Container";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  return (
    <Container>
      <footer className="items-center justify-between px-4 text-gray-300 border-t border-gray-300 border-opacity-20 py-7 md:flex">
        <p className="mb-7 md:mb-0">
          Creado con ❤️ por{" "}
          <span className="font-bold text-sky-400">Ángel Báez</span>
        </p>
        <SocialNetworks />
      </footer>
    </Container>
  );
};

export default Footer;
