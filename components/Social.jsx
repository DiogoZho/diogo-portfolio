import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DiogoZho" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/diogo-pereira-020a7b20b/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@zhoruark1645" },
  { icon: <FaTwitter />, path: "https://x.com/Zhoruark" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
