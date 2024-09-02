import React from "react";
import Contentwrapper from "../Contentwrapper/Contentwrapper";
import banner from "../assets/Bannerpic1.png";
import { Typewriter } from "react-simple-typewriter";
import myCv from "../assets/myCv.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Contentwrapper>
      <div
        id="home"
        className="flex w-full mt-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5"
      >
        <div className="w-2/5 ">
          <img src={banner} className="w-964" />
        </div>
        <div className="flex flex-col  justify-center w-3/5 gap-4 max-lg:w-full max-lg:items-center">
          <p className="text-red-600 font-bold max-lg:text-2xl">
            Hello Im Subhrojoti
          </p>
          <h1 className="text-5xl font-bold max-lg:text-4xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React JS Developer",
                "Freelance Developer",
                "Travel Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="#9E101A"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-500 max-lg:text-center">
            I'm Subhrojoti Nag from Kolkata, a frontend developer passionate
            about coding, travel, and editing. I've won 2nd prize in a learning
            contest at AlmaBetter, earned the Trailblazer Award, and secured
            quiz victories at Masai School. My toolkit includes HTML, CSS,
            JavaScript, React, MongoDB, Node.js, and more. I enjoy bringing
            designs to life and creating seamless user experiences. Looking
            forward to collaborating on exciting projects!
          </p>
          <div className="flex gap-5">
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="w-32 px-4 py-2 bg-red-600 hover:bg-redButton text-sm text-center cursor-pointer"
            >
              ABOUT ME
            </Link>
            <a
              href={myCv}
              download
              className="w-32 px-4 py-2  border border-red-600 text-sm text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Contentwrapper>
  );
};

export default Hero;
