/* eslint-disable no-unused-vars */
import meal from "../img/Meal.png";

import cart from "../img/AddToCart.png";
import disneyClone from "../img/disneyClone.png";
import ecommerce from "../img/ecommerce.png";
import landcruiser from "../img/landcruiser.png";
import youtube from "../img/youtube.png";

import { GiBeastEye } from "react-icons/gi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: youtube,
      desc: "Youtube Clone",
      href: "https://youtube-clone-you-tube-data-api.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/YoutubeClone-YouTubeDataApi-"
    },
    {
      id: 2,
      img: ecommerce,
      desc: "Ecommerce Website",
      href: "https://ecommerce-website-two-red.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/EcommerceWebsite"
    },
    {
      id: 3,
      img: landcruiser,
      desc: "Land Cruiser 2024 Blog",
      href: "https://land-cruiser2024-blog-lhkd.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/LandCruiser2024_blog"
    },
    {
      id: 4,
      img: meal,
      desc: "Special Dishes ",
      href: "https://meal-with-meal-api-cso3-my-team-4fbe4104.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/Meal-with-meal-api-"
    },

    {
      id: 5,
      img: disneyClone,
      desc: "Disney Clone(Get Api with Axios)",
      href: "https://disney-plus-clone-tawny-zeta.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/DisneyPlus-Clone"
    },

    {
      id: 6,
      img: cart,
      desc: "Add To Cart(RTK)",
      href: "https://add-to-cart-rtk-funr-my-team-4fbe4104.vercel.app/",
      hrefcode: "https://github.com/AungThuKha20/AddToCart-RTK-"
    }
  ];
  return (
    <div
      id="projects"
      className=" md:mt-[80px] sm:mt-0 h-[1800px] md:h-[1000px] lg:h-[1000px] w-full mx-auto "
    >
      <div className="  container  mx-auto h-full w-5/6 items-center align-middle flex flex-col justify-center  ">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-start mx-4 md:mx-[50px] sm:md-0 md:mt-8  text-white"
        >
          <h1 className=" font-heading md:text-3xl text-2xl"> Projects</h1>
          <p>Check out some of my projects here.</p>
        </motion.div>
        <div className=" mt-4 md:mt-8  flex flex-wrap md:flex-row flex-col justify-center gap-4 md:px-0 px-3  ">
          {projects.map(({ id, img, desc, href, hrefcode }) => {
            return (
              <div
                key={id}
                className="  relative  group  shadow-md shadow-teal-600 rounded-lg"
              >
                <div className=" w-full mx-auto relative  z-10 group-hover:bg-gradient-to-b from-cyan-800 via-slate-700 to-teal-900">
                  <div className="  md:w-[360px] w-[350px] h-[150px]  md:h-[160px] bg-gradient-to-b from-cyan-800 via-slate-700 to-teal-900  overflow-hidden">
                    <img
                      src={img}
                      className=" translate-x-0 group-hover:translate-x-full transition-all duration-500   object-cover  w-full h-full     "
                      alt=""
                    />
                  </div>
                  <div className=" overflow-hidden  font-heading hidden group-hover:flex flex-col transition-all duration-700 justify-center items-center  absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2    font-bold text-[10px] md:text-[14px] text-cyan-100">
                    <p className=" animate__animated animate__fadeInLeft text-center">
                      {" "}
                      {desc}
                    </p>
                    <p className=" animate__animated animate__fadeInLeft mt-1 flex items-center">
                      {" "}
                      <FaReact
                        size={30}
                        className="animate-spin"
                        style={{ animationDuration: "2s" }}
                      />
                      <span className=" mx-4 text-[20px]">+</span>
                      <SiTailwindcss
                        size={30}
                        className=" animate-pulse"
                        style={{ animationDuration: "2s" }}
                      />
                    </p>
                  </div>
                </div>
                <div className=" w-full flex">
                  <a
                    href={hrefcode}
                    className="  w-full   text-white border-r border-sky-950  hover:bg-gradient-to-l bg-gradient-to-r from-gray-600 via-teal-800  to-cyan-700 py-2 flex items-center justify-center text-2xl font-heading "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className=" text-[18px] flex flex-row   items-center ">
                      Code{" "}
                      <BsGithub size={20} className="text-white  ms-1    " />
                    </button>
                  </a>
                  <a
                    href={href}
                    className="  w-full   text-white  hover:bg-gradient-to-l bg-gradient-to-r from-cyan-700 via-teal-800 to-gray-600 py-2 flex items-center justify-center text-2xl font-heading "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className=" group  text-[18px] flex flex-row  items-center ">
                      Demo{" "}
                      <GiBeastEye size={20} className="text-white ms-1    " />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
