import Section from "./layout/Section";

import io from "../assets/io.jpg";

const AboutMe = () => {
  return (
    <Section title="Sobre Mi" id="about">
      <div className="md:grid grid-cols-2 gap-5 mt-6 text-gray-300 text-base md:text-xl items-center">
        <article>
          <p>
            Me llamo{" "}
            <span className="text-sky-400 underline underline-offset-2">
              Roberto Ángel Baez Salazar
            </span>
            , soy un joven de 21 años, apasionado por la tecnología y el
            desarrollo web.
          </p>
          <p>
            Siempre me gusta aprender tecnologías nuevas pero mi fuerte es
            JavaScript.
          </p>
          <p>
            Soy autodidacta, responsable, se trabajar en equipo, se trabajar
            bajo presión, además siempre busco cumplir el objetivo
          </p>
        </article>
        <div className="mx-auto w-60 rounded-lg p-3 duration-200 border border-sky-400 blur-sm hover:blur-none mt-8 md:mt-0">
          <img src={io} alt="io" className="rounded-lg relative z-10" />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
