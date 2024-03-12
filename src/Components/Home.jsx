/* eslint-disable no-unused-vars */

import profile from "../img/profile.png";
import { LuArrowBigRightDash } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className=" section  h-[800px] md:h-screen  w-full  ">
      <div className="  max-w-screen-lg md:px-4 px-1 h-full flex flex-col items-center mx-auto align-middle justify-center md:flex-row ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" px-2 mx-auto md:mt-0 text-gray-100 me-0 md:me-2 md:w-full"
        >
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-start font-heading h-[95px] md:h-[90px] font-bold text-2xl md:text-3xl"
          >
            <span className=" md:w-auto w-full">
              {" "}
              <span className=" md:hidden ">Hello!</span> I am
            </span>
            <br className=" md:hidden flex" />
            <TypeAnimation
              sequence={[
                " Aung Thu Kha.",
                2000,
                " A Frontend Web Developer",
                2000
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
              className="bg-gradient-to-r from-cyan-300 via-sky-500 to-gray-400 text-transparent bg-clip-text"
            />
          </motion.h1>
          <p className=" mt-2 text-start md:mt-0 text-gray-400">
            I am excited to launch my career as a frontend web developer and am
            presently enrolled in the NCC Level 4 Diploma in Programming.
            Despite the fact that I do not yet have professional experience, my
            passion for frontend development and the desire to learn make me an
            enthusiastic and passionate the seeker.
          </p>
          <div className=" ">
            <Link to="projects" smooth duration={2000}>
              <button className=" group rounded-full hover:bg-gradient-to-l  flex items-center font-extrabold bg-gradient-to-r from-cyan-900 via-teal-700 to-gray-600 px-6 py-2 my-3 hover:bg-gradient  hover:from-cyan-800 hover:to-gray-600 ">
                Projects
                <span className=" group-hover:rotate-90 duration-150">
                  <LuArrowBigRightDash size={30} />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="  w-3/4 md:w-4/6  pt-5 md:pt-0 "
        >
          <img
            src={profile}
            className=" shadow-lg w-[400px]  md:w-[500px] img  mx-auto "
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
