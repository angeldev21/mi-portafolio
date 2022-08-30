import { FiGithub } from "react-icons/fi";
import react from "../assets/react.svg";

const ProjectCard = ({ name, img, desc, link }) => {
  return (
    <article className="bg-slate-800 rounded-lg p-8 hover:-translate-y-1 duration-200 mb-4 md:mb-0">
      <div className="flex justify-between items-center w-full mb-7">
        <img src={react} className="h-10" />
        <div className="flex items-center gap-3 text-gray-300">
          <a href="#">
            <FiGithub size={20} />
          </a>
        </div>
      </div>
      <h4 className="text-xl font-bold mb-3 text-sky-400 underline underline-offset-8">
        Proyecto
      </h4>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, perferendis
        tempore placeat nihil
      </p>
      <div className="flex gap-3 font-fira-code text-xs mt-7 text-sky-400">
        <p>React</p>
        <p>Tailwind</p>
        <p>Firebase</p>
      </div>
    </article>
  );
};

export default ProjectCard;
