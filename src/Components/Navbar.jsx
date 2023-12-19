/* eslint-disable no-unused-vars */
import { GiSpikedDragonHead } from "react-icons/gi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";

import { FaHome } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: 1,
      cap: "Home",

      title: (
        <>
          <FaHome size={40} />
        </>
      ),
      href: "home"
    },
    {
      id: 2,
      cap: "About",
      title: (
        <>
          <BsPersonBoundingBox size={40} />
        </>
      ),
      href: "about"
    },
    {
      id: 3,
      cap: "Projects",
      title: (
        <>
          <GoProjectSymlink size={40} />
        </>
      ),
      href: "projects"
    },
    {
      id: 4,
      cap: "Skills",
      title: (
        <>
          <GrLanguage size={40} />
        </>
      ),
      href: "skills"
    },
    {
      id: 5,
      cap: "Contact",
      title: (
        <>
          <MdOutlineConnectWithoutContact size={40} />
        </>
      ),
      href: "contact"
    }
  ];

  return (
    <div className=" md:fixed w-full   z-50 text-cyan-50 flex text-[25px] md:text-[28px] pt-4 flex-row justify-between align-middle py-4 bg-gradient-to-l from-cyan-800 via-teal-800 to-gray-700">
      <div className=" flex flex-row items-center align-middle font-bold  ">
        <div>
          <h1 className=" ms-4 font-cursive sm:m-1 md:ms-[50px] lg:ms-[100px]  ">
            <span className=" text-cyan-400">P</span>
            <span className=" text-teal-300">O</span>
            <span className="  text-cyan-500">R</span>
            <span className="  text-teal-500">T</span>
            <span className="  text-cyan-300">F</span>
            <span className="  text-teal-400">O</span>
            <span className="  text-cyan-500">L</span>
            <span className="  text-teal-600">I</span>
            <span className="  text-cyan-500">O</span>
          </h1>
        </div>
        <div className=" text-cyan-500">
          <GiSpikedDragonHead className=" shadow-lg shadow-teal-700" />
        </div>
      </div>
      <div className=" hidden md:flex flex-row md:gap-14 lg:gap-20 me-10  align-middle">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              className={` duration-200 hover:text-teal-500 `}
              activeClass="active"
              to={link.href}
              smooth={true}
              duration={500}
              spy={true}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className="  md:hidden  text-cyan-200 hover:text-teal-500 cursor-pointer z-30  md:me-[50px] lg:me-[100px] me-10 "
      >
        {menu ? <RiCloseCircleLine /> : <BsMenuButtonWideFill />}
      </div>
      {menu && (
        <div className="  absolute top-0 left-0 bg-gradient-to-b   from-cyan-900 via-teal-900 to-gray-900 w-full h-screen  pt-20 ">
          <ul className="  flex flex-col items-center  justify-center align-middle  ">
            {links.map((link) => {
              return (
                <Link
                  to={link.href}
                  onClick={() => setMenu(!menu)}
                  key={link.id}
                >
                  <li className=" group font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r hover:bg-gradient-to-l border-l-cyan-500 from-teal-300 via-gray-400 to-violet-400 flex flex-row justify-evenly text-2xl mt-5  cursor-pointer">
                    {link.cap}{" "}
                    <span className=" group-hover:animate-pulse active:animate-pulse  group-hover:text-teal-300   duration-800 ms-2 text-teal-500">
                      {link.title}
                    </span>
                  </li>
                  <br />
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
