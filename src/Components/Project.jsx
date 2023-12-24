/* eslint-disable no-unused-vars */
import meal from "../img/Meal.png";
import movie from "../img/Movie.png";
import cart from "../img/AddToCart.png";
import disneyClone from "../img/disneyClone.png";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: meal,
      desc: "Special Dishes(React JS) ",
      href: "https://meal-with-meal-api-cso3-my-team-4fbe4104.vercel.app/"
    },
    {
      id: 2,
      img: movie,
      desc: "Popular Movies(React JS)",
      href: "https://popular-movies-in-this-month-my-team-4fbe4104.vercel.app/"
    },
    {
      id: 3,
      img: cart,
      desc: "Add To Cart(React JS)",
      href: "https://add-to-cart-rtk-funr-my-team-4fbe4104.vercel.app/"
    },
    {
      id: 4,
      img: disneyClone,
      desc: "Disney Clone(Get Api with Axios)",
      href: "https://disney-plus-clone-tawny-zeta.vercel.app/"
    }
  ];
  return (
    <div
      id="projects"
      className=" md:mt-[80px] sm:mt-0 h-[950px] md:h-[1000px] w-full mx-auto "
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
        <div className=" mt-4  flex flex-wrap justify-around gap-10 md:px-0 px-3  ">
          {projects.map(({ id, img, desc, href }) => {
            return (
              <div
                key={id}
                className=" w-fu;; relative  group shadow-md shadow-teal-600 rounded-lg"
              >
                <div className=" w-full mx-auto relative z-10 group-hover:bg-gradient-to-b from-cyan-800 via-slate-700 to-teal-900">
                  <img
                    src={img}
                    className=" group-hover: mix-blend-soft-light    w-[350px]  h-[200px]  rounded-md duration-200"
                    alt=""
                  />
                  <p className=" font-heading hidden group-hover:flex text-center  absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2    font-bold text-[10px] md:text-[18px] text-cyan-100">
                    {desc}
                  </p>
                </div>
                <a
                  href={href}
                  className=" w-full  text-white group hover:bg-gradient-to-l bg-gradient-to-r from-cyan-700 via-teal-800 to-gray-600 py-2 flex items-center justify-center text-2xl font-heading "
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" text-[20px] flex  items-center ">
                    View{" "}
                    <FaEye className="text-white ms-1 group-hover:rotate-180 duration-200  " />
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
