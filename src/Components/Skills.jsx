/* eslint-disable no-unused-vars */
import html from "../img/html.png";
import css from "../img/css.jpg";
import js from "../img/js.jpg";
import bs from "../img/bootstrap.jpg";
import tailwind from "../img/tailwind.png";
import mysql from "../img/mysql.jpg";
import reactjs from "../img/reactjs.png";
import git from "../img/git.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      img: html,
      style: "shadow-orange-500"
    },
    {
      id: 2,
      title: "CSS",
      img: css,
      style: "shadow-blue-500"
    },
    {
      id: 3,
      title: "JavaScript",
      img: js,
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      title: "Bootstrap",
      img: bs,
      style: "shadow-violet-500"
    },
    {
      id: 5,
      title: "Tailwind CSS",
      img: tailwind,
      style: "shadow-sky-500"
    },
    {
      id: 6,
      title: "Git",
      img: git,
      style: "shadow-orange-600"
    },
    {
      id: 7,
      title: "React-js",
      img: reactjs,
      style: "shadow-sky-500"
    },
    {
      id: 8,
      title: "MySQL",
      img: mysql,
      style: "shadow-blue-300"
    }
  ];
  return (
    <div
      id="skills"
      className="  w-fit md:w-full h-[2400px] mx-auto sm:mt-0 md:mt-6 md:h-[950px] flex flex-cols items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto text-white text-center">
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" w-full flex flex-col sm:text-center items-start mx-auto md:mx-[30px] lg:mx-[20px]"
        >
          <h1 className="text-2xl font-heading md:ms-0  md:text-3xl">Skills</h1>
          <p className="mt-2 text-[20px] font-bold">
            These are some languages I have worked with
          </p>
        </motion.div>
        <div className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`px-10 py-12 flex flex-col items-center align-middle mt-10 mx-auto hover:bg-gradient-to-l hover:shadow-xl bg-gradient-to-r from-teal-800 via-gray-500 to-cyan-800 shadow-lg hover:scale-105 duration-500 rounded-lg ${skill.style}`}
            >
              <img
                src={skill.img}
                className="w-[60px] h-[60px] object-fill mx-auto"
                alt=""
              />
              <p className=" w-[150px]">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
