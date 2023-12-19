import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import SocialLink from "./Components/SocialLink";

import SocialLinkSm from "./Components/socialLinkSm";

const App = () => {
  return (
    <div className=" overflow-x-hidden md:mx-0 mx-auto bg-gradient-to-l w-fit md:w-full  from-cyan-900 via-teal-900 to-gray-800">
      <Navbar />
      <Home />
      <SocialLink />
      <SocialLinkSm />
      <About />
      <Project />
      <Skills />
      <Contact />
      <SocialLinkSm />
    </div>
  );
};

export default App;
