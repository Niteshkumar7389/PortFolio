import React from "react";
import { FaPhoneAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0e5fe1f8-3bf0-4240-aa4a-71d33d0d464c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank You",
        text: "Message sent successfully",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Failed to send the message. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div
      className="grid grid-cols-2 items-center gap-12 pl-8 mt-32"
      id="contact"
    >
      <div className="contact-text">
        <h2 className="text-6xl text-center mb-10 items-center font-bold">
          Contact<span className="text-customCyan">Me</span>
        </h2>
        <h4 className=" mt-2 text-white text-2xl font-semibold">
          let's Work Together
        </h4>
        <p className="text-gray-400 text-2xl mb-8">
          You can also reach me directly at:
        </p>
        <div className="mb-12">
          <ul>
            <li className="flex items-center mb-4  font-semibold transition text-xl">
              <FaPhoneAlt className="mr-2 text-customCyan" />
              <span>7999745668</span>
            </li>
            <li className="flex items-center font-semibold transition text-xl">
              <BiSolidSend className="mr-2 text-customCyan" />
              <span>niteshojha7389@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 ease hover:bg-customCyan hover:text-black">
          <a
            href="https://www.linkedin.com/in/nitesh-kumar-ojha-549362259/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="btn inline-flex justify-center items-center h-10 w-10 text-xl mt-8 mb-8 mr-4 border-2 border-customCyan rounded-full text-customCyan animate-slideLeft bg-transparent transition duration-500 ease hover:bg-customCyan hover:text-black">
          <a href="https://wa.me/7999745668" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="relative mt-32">
        <form method="POST" id="form" onSubmit={onSubmit} className="space-y-4">
          <input
            className="border-none outline-none w-[90%] p-4 text-black text-base font-semibold mb-2 rounded-lg required"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="border-none outline-none w-[90%] p-4 text-black text-base font-semibold mb-2 rounded-lg"
          />
          <textarea
            name="message"
            cols="40"
            rows="10"
            placeholder="Enter Your Message Here"
            required
            className="border-none outline-none w-[90%] p-4 text-black text-base font-semibold rounded-lg resize-none h-56"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="px-4 py-4  w-[90%] text-customBlue bg-customCyan rounded-lg text-base font-semibold opacity-0 animate-slideTop btn btn::hover"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
