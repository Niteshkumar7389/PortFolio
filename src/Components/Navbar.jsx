import { useState } from "react";
import { navItems } from "../Constants/index.js";
import { IoMenu } from "react-icons/io5";
import { MdClear } from "react-icons/md";

function Navbar() {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };
  return (
    <nav className="sticky top-0 left-0 z-100 py-4 scroll-smooth text-textColor bg-customBlue">
      <div className="container px-8 mx-auto relative text-lg font-bold">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl font-signature animate-slideRight tracking-tight  hover:text-customCyan">
              PortFolio
            </h1>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              const delay = `calc(0.2s * ${index})`;
              return (
                <li
                  key={index}
                  className="animate-slideTop  hover:text-customCyan"
                  style={{ animationDelay: delay }}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden md:flex justify-end flex-col">
            <button onClick={toggleNavbar}>
              {mobileDrawer ? <MdClear /> : <IoMenu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-customBlue w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
