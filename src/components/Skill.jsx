import React from "react";

const Skill = ({ icon, name }) => {
  return (
    <li className="py-3 px-3 md:px-8 border border-gray-300 border-opacity-20 rounded-lg inline-block w-full">
      <div className="items-center gap-3 flex justify-center">
        <img src={icon} className="h-9 md:h-10 hover:rotate-12 duration-200" />
        <p className="capitalize text-gray-300 font-bold text-xl hidden md:inline">
          {name}
        </p>
      </div>
    </li>
  );
};

export default Skill;
