import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsFillSendCheckFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className=" w-full h-[1000px] text-white">
      <div className="  justify-center max-w-screen-lg h-full mx-auto flex flex-col p-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" pb-8"
        >
          <h1 className=" font-heading text-2xl md:text-3xl">Contact</h1>
          <p className=" font-sans font-extrabold mt-4">
            Let work together! .Submit the form to touch with me{" "}
          </p>
        </motion.div>
        <div className=" flex justify-center items-center">
          <form action="" className=" md:w-1/2 w-3/4 flex flex-col">
            <div className=" flex flex-col mb-4">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name.."
                className=" p-2  bg-transparent border-2 border-t-cyan-500 border-l-gray-500 border-b-teal-500 border-r-violet-500 rounded-md text-white focus:outline-none"
              />
            </div>
            <div className=" flex flex-col mb-4">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email.."
                className=" p-2  bg-transparent border-2 border-t-cyan-500 border-l-gray-500 border-b-teal-500 border-r-violet-500 rounded-md text-white focus:outline-none"
              />
            </div>
            <div className=" flex flex-col mb-4">
              <label htmlFor="text">Comment for me</label>
              <textarea
                name="text"
                id=""
                className=" p-4 bg-transparent border-2 border-t-cyan-500 border-l-gray-500 border-b-teal-500 border-r-violet-500 rounded-md text-white focus:outline-none"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <a href="https://m.me/aung.thukha.50746444">
              <button className="flex items-center justify-center w-full mx-auto group rounded-full hover:bg-gradient-to-l font-heading font-extrabold bg-gradient-to-r from-cyan-900 via-teal-700 to-gray-600 px-6 py-2 my-3 hover:bg-gradient hover:from-cyan-800 hover:to-gray-600">
                <span className="mr-2">Send</span>
                <span className="group-hover:rotate-45 duration-150">
                  <BsFillSendCheckFill size={30} />
                </span>
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
