import { motion } from "framer-motion";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const SocialNetworks = ({ direction = "row" }) => {
  const prop = { size: 23 };

  const networks = [
    {
      text: "github",
      link: "https://github.com/AngelBzDev",
      icon: <FiGithub {...prop} />,
    },
    {
      text: "linkedin",
      link: "https://www.linkedin.com/in/angel-baez-99918620b/",
      icon: <FiLinkedin {...prop} />,
    },
    {
      text: "twitter",
      link: "https://twitter.com/baezdev",
      icon: <FiTwitter {...prop} />,
    },
  ];

  return (
    <ul
      className={`flex ${direction === "row" ? "flex-row" : "flex-col"} gap-5`}
    >
      {networks.map((network) => (
        <li
          key={network.text}
          className="text-gray-300 duration-200 hover:-translate-y-1"
        >
          <a href={network.link} className="hover:text-sky-400" target="_blank">
            {network.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialNetworks;
