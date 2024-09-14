import { IoCode, IoCrop, IoLogoApple } from "react-icons/io5";
import React from "react";

function Services() {
  return (
    <div id="services" className="text-xl mb-16">
      <div className="p-24 ">
        <h1 className="text-center text-6xl font-bold pb-16">
          My <span className="text-customCyan">Services</span>
        </h1>
        <div className="grid grid-cols-auto-fit-minmax gap-10 mt-12 ">
          <div className="transform-hover shadow-custom rounded-2xl  bg-transparent px-10 py-10 text-sm font-medium ">
            <div className="text-5xl mb-8 text-customCyan">
              <IoCode />
            </div>
            <h2 className="text-3xl font-medium mb-4">Web development</h2>
            <p className="text-xs">Custom Website development </p>
            <a
              href="#"
              className="btn inline-block mt-4 px-7 py-3 text-sm text-customBlue font-semibold bg-customCyan rounded-full"
            >
              learn more
            </a>
          </div>

          <div className="transform-hover shadow-custom rounded-2xl  bg-transparent px-10 py-10 text-sm font-medium ">
            <div className="text-5xl mb-8 text-customCyan">
              <IoCrop />
            </div>
            <h2 className="text-3xl font-medium mb-4">Responsive Design</h2>
            <p className="text-xs">
              Cross-Browser Compatibility for Making sure websites perform well
              across different browsers
            </p>
            <a
              href="#"
              className="btn inline-block mt-4 px-7 py-3 text-sm text-customBlue font-semibold bg-customCyan rounded-full"
            >
              learn more
            </a>
          </div>
          <div className="transform-hover shadow-custom rounded-2xl  bg-transparent px-10 py-10 text-sm font-medium">
            <div className="text-5xl mb-8 text-customCyan">
              <IoLogoApple />
            </div>
            <h2 className="text-3xl font-medium mb-4">API Integration</h2>
            <p className="text-xs">
              Third-Party API Integration to Connecting websites with various
              APIs for enhanced functionality.
            </p>
            <a
              href="#"
              className="btn inline-block mt-4 px-7 py-3 text-sm text-customBlue font-semibold bg-customCyan rounded-full"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
