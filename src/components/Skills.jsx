import Section from "./layout/Section";
import Skill from "./Skill";

//***** Icons
import html from "../assets/html.svg";
import css from "../assets/css3.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import node from "../assets/node-js.svg";
import next from "../assets/next-js.svg";
import mysql from "../assets/mysql.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import tailwind from "../assets/tailwind-css.svg";
import npm from "../assets/npm.svg";
import yarn from "../assets/yarn.svg";
import vite from "../assets/vitejs.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";

const Skills = () => {
  const technologies = [
    { name: "html", icon: html },
    { name: "css", icon: css },
    { name: "javascript", icon: javascript },
    { name: "react", icon: react },
    { name: "node.js", icon: node },
    { name: "next.js", icon: next },
    { name: "mysql", icon: mysql },
    { name: "redux", icon: redux },
    { name: "sass", icon: sass },
    { name: "tailwind", icon: tailwind },
    { name: "npm", icon: npm },
    { name: "yarn", icon: yarn },
    { name: "vitejs", icon: vite },
    { name: "git", icon: git },
    { name: "github", icon: github },
  ];

  return (
    <Section title="Habilidades" id="skills">
      <ul className="bg-slate-800 rounded-lg p-10 grid grid-cols-minmax gap-2 md:gap-5 place-content-center ">
        {technologies.map(({ name, icon }) => (
          <Skill key={name} name={name} icon={icon} />
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
