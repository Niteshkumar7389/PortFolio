import React from "react";
import resume from "../assets/Nitesh-Kumar-MERN-Developer.pdf";
import TypedText from "../Constants/Typed";
import logo from "../assets/3.jpg";
import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoGithub,
} from "react-icons/bi";

// function Home() {
//   return (
//     <div
//       id="home"
//       // className="h-screen scroll-smooth pb-10 bg-logo bg-cover bg-center bg-no-repeat"
//       className="h-screen sm:h-auto md:h-screen scroll-smooth pb-10 bg-logo bg-cover bg-center bg-no-repeat sm:bg-contain"
//     >
//       <div className="relative flex flex-col lg:flex-row items-center justify-between pt-10 px-6 lg:px-10 text-white">
//         <div className="max-w-xl sm:max-w-sm md:max-w-2xl md:h-screen lg:max-w-lg xl:max-w-xl ">
//           <h3 className="text-2xl sm:text-3xl mt-2 font-bold animate-slideBottom">
//             Hello, It's Me
//           </h3>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold animate-slideRight">
//             Nitesh Kumar Ojha
//           </h1>
//           <h3 className="text-2xl sm:text-3xl mt-2 font-bold animate-slideTop">
//             And I'm a <TypedText />
//           </h3>
//           <p className="text-lg sm:text-xl pt-6 sm:pt-8 animate-slideLeft">
//             I'm a Passionate and innovative Frontend Developer, eager to embark
//             on a journey of continuous learning and growth. With a solid
//             foundation in web development technologies.
//           </p>

//           <div className="flex flex-wrap mt-6">
//             <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
//               <a href="mailto:niteshojha7389@gmail.com" target="_blank">
//                 <BiLogoGmail />
//               </a>
//             </span>
//             <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
//               <a href="https://wa.me/7999745668" target="_blank">
//                 <BiLogoWhatsapp />
//               </a>
//             </span>
//             <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
//               <a
//                 href="https://www.linkedin.com/in/nitesh-kumar-ojha-549362259/"
//                 target="_blank"
//               >
//                 <BiLogoLinkedin />
//               </a>
//             </span>
//             <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
//               <a href="https://github.com/Niteshkumar7389" target="_blank">
//                 <BiLogoGithub />
//               </a>
//             </span>
//             <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
//               <a
//                 href="https://www.instagram.com/_nitesh___kumar__/"
//                 target="_blank"
//               >
//                 <BiLogoInstagram />
//               </a>
//             </span>
//           </div>

//           <div className="mt-6">
//             <a
//               href={resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn inline-block px-6 py-3 text-base text-customBlue font-semibold bg-customCyan rounded-full"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function Home() {
  return (
    <div id="home" className="grid lg:grid-cols-2 ">
      <div className="relative flex flex-col lg:flex-row items-center justify-between pt-10 px-6 lg:px-16 text-white mt-8">
        <div className="max-w-xl sm:max-w-sm md:max-w-2xl md:h-screen lg:max-w-lg xl:max-w-xl ">
          <h3 className="text-2xl sm:text-3xl mt-2 font-bold animate-slideBottom">
            Hello, I'm
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold animate-slideRight">
            Nitesh Kumar Ojha
          </h1>
          <h3 className="text-2xl sm:text-3xl mt-2 font-bold animate-slideTop">
            And I'm a <TypedText />
          </h3>
          <p className="text-lg sm:text-xl pt-6 sm:pt-8 animate-slideLeft">
            MERN Stack Developer with a strong foundation in building scalable
            and maintainable web applications and focus on delivering clean and
            efficient code.
          </p>

          <div className="flex flex-wrap mt-6">
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
              <a href="mailto:niteshojha7389@gmail.com" target="_blank">
                <BiLogoGmail />
              </a>
            </span>
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
              <a href="https://wa.me/7999745668" target="_blank">
                <BiLogoWhatsapp />
              </a>
            </span>
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
              <a
                href="https://www.linkedin.com/in/nitesh-kumar-ojha-549362259/"
                target="_blank"
              >
                <BiLogoLinkedin />
              </a>
            </span>
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
              <a href="https://github.com/Niteshkumar7389" target="_blank">
                <BiLogoGithub />
              </a>
            </span>
            <span className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-4 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 hover:bg-customCyan hover:text-black">
              <a
                href="https://www.instagram.com/_nitesh___kumar__/"
                target="_blank"
              >
                <BiLogoInstagram />
              </a>
            </span>
          </div>

          <div className="mt-6">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-block px-6 py-3 text-base text-customBlue font-semibold bg-customCyan rounded-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-xl mt-2 h-auto w-full rounded-lg pb-100px">
        <img src={logo} alt="About-image" />
      </div>
    </div>
  );
}

export default Home;
