import React from "react";
import { useEffect } from 'react';
import resume from "../assets/NiteshResume.pdf";
import TypedText from "../Constants/Typed";
import { BiLogoGmail } from "react-icons/bi";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoGithub,
} from "react-icons/bi";

function Home() {
  return (
    <div
      id="home"
      className="h-screen scroll-smooth pb-10 bg-logo bg-cover bg-center bg-no-repeat"
    >
      <div className="relative  justify-between flex items-center pt-90px pb-0 px-10p text-white bg">
        <div className="max-w-xl">
          <h3 className="text-3xl mt-2  font-bold animate-slideBottom">
            Hello, It's Me
          </h3>
          <h1 className="text-6xl mt-2 font-bold  animate-slideRight">
            Nitesh Kumar Ojha
          </h1>
          <h3 className="text-3xl mt-2 font-bold animate-slideTop">
            And I'm a <TypedText />
          </h3>
          <p className="text-xl pt-8 slideLeft">
            I'm a Passionate and innovative Frontend Developer, eager to embark
            on a journey of continuous learning and growth. With a solid
            foundation in web development technologies.
          </p>

          <div>
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 ease hover:bg-customCyan hover:text-black delay-[0s]">
              <a href="mailto:niteshojha7389@gmail.com" target="_blank">
                <BiLogoGmail />
              </a>
            </span>

            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4  border-2 border-customCyan rounded-full text-customCyan  animate-slideLeft bg-transparent transition duration-500 ease  hover:bg-customCyan hover:text-black">
              <a href="https://wa.me/7999745668" target="_blank">
                <BiLogoWhatsapp />
              </a>
            </span>

            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4  border-2 border-customCyan rounded-full text-customCyan  animate-slideLeft bg-transparent transition duration-500 ease  hover:bg-customCyan hover:text-black">
              <a
                href="https://www.linkedin.com/in/nitesh-kumar-ojha-549362259/"
                target="_blank"
              >
                <BiLogoLinkedin />
              </a>
            </span>

            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4  border-2 border-customCyan rounded-full text-customCyan  animate-slideLeft bg-transparent transition duration-500 ease  hover:bg-customCyan hover:text-black">
              <a href="https://github.com/Niteshkumar7389" target="_blank">
                <BiLogoGithub />
              </a>
            </span>

            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4  border-2 border-customCyan rounded-full text-customCyan  animate-slideLeft bg-transparent transition duration-500 ease  hover:bg-customCyan hover:text-black">
              <a
                href="https://www.instagram.com/_nitesh___kumar__/"
                target="_blank"
              >
                <BiLogoInstagram />
              </a>
            </span>
          </div>
          <div>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-block px-7 py-3 text-base text-customBlue font-semibold bg-customCyan rounded-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
