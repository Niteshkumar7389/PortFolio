import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { skill } from "../Constants/index";

function Skills() {
  return (
    <div id="skills">
      <h1 className="text-center text-6xl pb-16 font-bold mt-28">
        My <span className="text-customCyan">Skills</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-2 items-center w-[90%] mx-auto">
        <div className="w-full">
          <h1 className="text-3xl text-center font-semibold underline underline-offset-8 mt-12 mb-12">
            Technical Skills
          </h1>
          <div className="techbars">
            <div
              className="text-orange-500 text-2xl  mx-4 sm:mx-28
             my-0 mt-0"
            >
              <FaHtml5 />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  HTML
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[90%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded">
                    90%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-blue-500 text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <FaCss3 />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  CSS
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[90%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded ">
                    90%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-yellow-500 text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <IoLogoJavascript />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  JAVASCRIPT
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[75%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded ">
                    75%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-customCyan text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <FaReact />
              <div className="text-white text-lg mb-1">
                <span className="text-lg font-medium animate-showText">
                  REACT
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[80%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded ">
                    80%
                  </span>
                </div>
              </div>
            </div>

            <div className="text-white text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <FaJava />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  JAVA
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[80%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded">
                    80%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-customCyan text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <SiTailwindcss />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  TAILWIND
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[70%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded">
                    70%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-green-900 text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <SiMongodb />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  MONGODB
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[80%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded">
                    80%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-orange-500 text-2xl  mx-4 sm:mx-28 my-0 mt-1">
              <FaGitAlt />
              <div className="text-white text-lg mb-1 ">
                <span className="text-lg font-medium animate-showText">
                  GIT
                </span>
              </div>
              <div className="relative w-full h-1 bg-black rounded-xl animation">
                <div className="h-full bg-customCyan w-[80%] rounded-xl relative animation1">
                  <span className="absolute top-[-20px] right-0 text-xs text-white bg-black px-1 rounded">
                    80%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-3xl text-center font-semibold underline underline-offset-8 mb-12 mt-12 lg:mt-0">
            Professional Skills
          </h1>
          <div className="grid grid-cols-2 ">
            {skill.map((skill, index) => (
              <div key={index} className="flex flex-col items-center m-9">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    className="progressbar animate-animateBar"
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "rgb(0,255,255)",
                      trailColor: "#000000",
                      pathTransitionDuration: 0.5,
                    })}
                  />
                </div>
                <p className="text-white mt-10">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
