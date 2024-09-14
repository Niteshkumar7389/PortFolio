import React from "react";
import CodeCraft from "../assets/projects/CodeCraft.png";
import myntra from "../assets/projects/myntra.png";
import age from "../assets/projects/age.png";
import portfolio from "../assets/projects/portfolio.png";
import rockpaper from "../assets/projects/rockpaper.png";
import pixelated from "../assets/projects/pixelated.png";
import todo from "../assets/projects/todo.png";
import simon from "../assets/projects/simon.png";
import { BiLogoGithub } from "react-icons/bi";

export default function Project() {
  const projects = [
    {
      id: 1,
      src: CodeCraft,
      title: "CodeCraft",
      link: "https://code-craft-six.vercel.app/",
      tech: "HTML | CSS | javaScript | React | Tailwind CSS",
      color: "green",
    },
    {
      id: 2,
      src: portfolio,
      title: "PortFolio",
      link: "https://github.com/",
      tech: "HTML | CSS | javaScript | React | Tailwind CSS",
      color: "green",
    },
    {
      id: 3,
      src: myntra,
      title: "Myntra Clone",
      link: "https://niteshkumar7389.github.io/Myntra_Clone/",
      tech: "HTML | CSS | JAVASCRIPT",
      color: "green",
    },
    {
      id: 4,
      src: todo,
      title: "TODO",
      link: "https://niteshkumar7389.github.io/TODO_in_React/",
      tech: "React | Tailwind CSS ",
      color: "green",
    },
    {
      id: 5,
      src: simon,
      title: "Simon Says Game",
      link: "https://niteshkumar7389.github.io/Simon-Says-Game/",
      tech: "Html | Css | Javascript",
      color: "green",
    },
    {
      id: 6,
      src: rockpaper,
      title: "Rock Paper Scissors",
      link: "https://niteshkumar7389.github.io/Rock_paper_scissors/",
      tech: "HTML | CSS | JavaScript",
      color: "green",
    },
    {
      id: 7,
      src: age,
      title: "Age Calculator",
      link: "https://niteshkumar7389.github.io/Age_Calculator/",
      tech: "HTML || CSS || javaScript",
      color: "green",
    },
    {
      id: 8,
      src: pixelated,
      title: "pixelated Professor",
      link: "https://niteshkumar7389.github.io/Age_Calculator/",
      tech: "HTML | CSS | javaScript | React | Next | Mongodb",
      color: "red",
    },
  ];

  return (
    <div
      id="project"
      className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen"
    >
      <h1 className="text-center text-6xl pb-24 font-bold mt-28">
        My <span className="text-customCyan">Projects</span>
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(({ id, src, title, link, tech, color }) => (
          <div
            key={id}
            className="bg-black/20 shadow-md shadow-gray-600 rounded-lg"
          >
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex flex-col items-center justify-center p-4">
              <p className="w-full text-center py-2">{title}</p>
              <p className="w-full text-center py-2">{tech}</p>
              <div className="w-full text-center py-2 flex items-center justify-center">
                <span>Status:</span>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginLeft: "8px",
                    backgroundColor: color,
                    border: "2px solid black",
                  }}
                ></div>
              </div>

              <div className="w-full px-6 py-2 my-2 duration-200 hover:scale-105">
                <a
                  href={link}
                  className="flex justify-between items-center w-full text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo Link{" "}
                  <a href={link} target="_blank">
                    Click here
                  </a>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
