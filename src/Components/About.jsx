/* eslint-disable react/no-unescaped-entities */
import profile2 from "../img/profile2.png";
import { GiPyromaniac } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <nav id="about" className=" mt-10  h-[1000px] md:h-screen w-full  ">
      <div className="  max-w-screen-lg md:px-4 px-0 h-full text-center items-center flex flex-col-reverse mx-auto align-middle justify-evenly md:flex-row ">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" w-5/6 mx-auto  md:w-3/6  md:mt-1    pt-5 md:pt-0 "
        >
          <img
            src={profile2}
            className="  shadow-lg w-[400px]  md:w-[500px]   mx-auto "
            alt=""
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" md:px-4 px-0  md:mt-0 text-gray-100 me-0 md:me-2 md:w-5/6"
        >
          <h1 className=" mx-1 flex flex-row font-heading font-bold text-2xl md:text-3xl ">
            About me{" "}
            <span className=" bg-gradient-to-r from-cyan-300 via-sky-500 to-gray-400 text-transparent bg-clip-text">
              <GiPyromaniac className=" ms-2 text-cyan-200 animate__animated animate__swing animate__infinite animate__delay-2s" />
            </span>
          </h1>
          <p className=" mt-5 text-start mx-2  text-gray-400">
            Before I started at NCC,After three years of study, I opted to pause
            my IT studies at Technological University (Mawlamyine) at the age of
            21. The difficulties caused by the COVID outbreak forced the pause
            in my academic career. During my break, I got attracted to the
            exciting world of frontend web development. As I explored deeper
            into my newfound passion, I discovered the strength and flexibility
            of React.js, a JavaScript package known for creating user
            interfaces. Frontend development's dynamic nature appealed to my
            creative side, and I found enjoyment in turning designs into
            functional and visually appealing websites.
          </p>
        </motion.div>
      </div>
    </nav>
  );
};

export default About;
