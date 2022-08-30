const Button = ({ text, icon }) => {
  return (
    <button className="text-center inline-flex items-center justify-center gap-2 font-fira-code border-2 text-sm border-sky-500 leading-none rounded-lg px-7 py-5 text-sky-400 duration-200 hover:-translate-y-1 hover:text-gray-300 hover:bg-sky-500 hover:bg-opacity-20">
      {icon}
      {text}
    </button>
  );
};

export default Button;
