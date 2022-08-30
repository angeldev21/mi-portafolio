import { useInView } from "framer-motion";
import { useRef } from "react";

import Container from "./Container";
import TitleSection from "./TitleSection";

const Section = ({ title, children, id }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "50px 0px 0px 0px" });

  return (
    <section
      id={id}
      className="mb-40"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <Container>
        <TitleSection title={title} />
        {children}
      </Container>
    </section>
  );
};

export default Section;
