const TitleSection = ({ title }) => {
  return (
    <h3 className="flex text-gray-300 mb-10 items-center gap-3 text-2xl font-black after:content-[' '] after:w-28 md:after:w-72 after:bg-gray-300 after:opacity-20 after:h-px after:block">
      {title}
    </h3>
  );
};

export default TitleSection;
