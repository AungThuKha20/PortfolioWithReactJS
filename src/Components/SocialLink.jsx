/* eslint-disable no-unused-vars */
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

import { IoMdMailUnread } from "react-icons/io";

const SocialLink = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AungThuKha20",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aung-thukha-20a57a256/"
    },
    {
      id: 3,
      child: (
        <>
          Mail <IoMdMailUnread size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/athukha20@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
          CV Form <FaFilePdf size={30} />
        </>
      ),
      href: "./src/img/atkCV.pdf",
      download: true
    }
  ];
  return (
    <div className=" top-[85%] fixed  z-40 flex flex-col left-0 md:top-[75%] lg:top-[30%]">
      <ul className=" ">
        {Links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className="my-1 rounded-tr-md rounded-br-md  duration-200 md:ml-[-90px]  lg:ml-[-90px] ml-[-95px]  hover:ml-[-10px] flex w-32  md:h-10 lg:h-14 px-4  justify-between   bg-gradient-to-l  from-cyan-600 via-teal-500 to-gray-500"
            >
              <a
                className=" flex justify-between font-extrabold items-center w-full  text-gray-900"
                href={href}
                target="_blank"
                rel="noreferrer"
                download={download}
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLink;
