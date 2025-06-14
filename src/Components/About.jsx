import React from "react";
import about from "../assets/2.jpg";
function About() {
  return (
    <div id="about" className="grid grid-cols-2 scroll-smooth pb-24">
      <div className="max-w-xl mt-2 h-auto w-full rounded-lg pb-100px">
        <img src={about} alt="About-image" />
      </div>
      <div className="items-center gap-6 ">
        <h2 className="text-6xl mt-24 font-semibold">
          About<span className="text-customCyan">Me</span>
        </h2>

        <h4 className="text-3xl font-bold  mt-8">MERN Developer</h4>
        <p className="text-xl mb-16 mt-8">
          I'm Nitesh Kumar Ojha, a passionate MERN Stack Developer with hands-on
          experience in building full-stack web applications. I specialize in
          creating responsive UIs with React.js and scalable backends using
          Node.js, Express, and MongoDB. I enjoy turning complex problems into
          clean, efficient solutions, and I'm always eager to learn new
          technologies and contribute to impactful projects.
        </p>
        <a
          href="#"
          className="btn inline-block px-7 py-3 text-base text-customBlue font-semibold bg-customCyan rounded-full"
        >
          More About Me
        </a>
      </div>
    </div>
  );
}

export default About;
