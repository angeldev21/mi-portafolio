const LinkButton = ({ text, href, icon }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 py-5 text-sm leading-none text-center duration-200 border-2 rounded-lg font-fira-code border-sky-500 px-7 text-sky-400 hover:-translate-y-1 hover:text-gray-300 hover:bg-sky-500 hover:bg-opacity-20"
      target="_blanck"
    >
      {icon}
      {text}
    </a>
  );
};

export default LinkButton;
