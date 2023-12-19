/* eslint-disable no-unused-vars */
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

import { IoMdMailUnread } from "react-icons/io";

const SocialLinkSm = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AungThuKha20"
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aung-thukha-20a57a256/"
    },
    {
      id: 3,
      child: (
        <>
          <IoMdMailUnread size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/athukha20@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
          <FaFilePdf size={30} />
        </>
      ),
      href: "./src/img/atkCV.pdf",
      download: true
    }
  ];
  return (
    <div className="hidden   mx-auto w-full z-40 flex-row bottom-0">
      <ul className="flex flex-row gap-10 justify-between mx-auto bg-gradient-to-r from-teal-600 via-gray-400 to-cyan-500 px-4 py-2">
        {Links.map(({ id, child, href, download }) => {
          return (
            <li key={id}>
              <a
                className="flex border-2 border-violet-500 text-cyan-900 justify-between font-extrabold items-center w-full  style"
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

export default SocialLinkSm;
