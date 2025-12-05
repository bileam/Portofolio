import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ isDark, setDark }) => {
  const [active, setActive] = useState("home");
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };
  //   console.log(click);

  return (
    <nav className="md:container   mx-auto py-4 px-3 lg:px-10 fixed top-0 right-0 left-0 z-100 dark:bg-bacg">
      <div className="flex md:flex-row relative  justify-between md:items-center md:dark:bg-bacg md:rounded-full p-2">
        <div className="flex items-center justify-between  w-full md:w-auto pr-2 md:pr-0">
          <h1 className="text-kuning text-[1.5rem] font-semibold">.Bileam</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!isDark)}
              className="px-1 bg-f-text rounded-full transition-all duration-700 md:hidden"
            >
              {" "}
              {isDark ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => setClick(!click)}
              className="md:hidden flex flex-col gap-1 cursor-pointer"
            >
              <div
                className={`border w-5 dark:border-t-fonta ${
                  click ? "translate-y-1 rotate-45" : "rotate-0 translate-0"
                } transition-all duration-700`}
              ></div>
              <div
                className={`border w-5 dark:border-t-fonta overflow-hidden transition-all duration-700 ${
                  click ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`border w-5 dark:border-t-fonta transition-all duration-700 ${
                  click ? "-translate-y-2 -rotate-45" : ""
                } `}
              ></div>
            </button>
          </div>
        </div>
        <div className="gap-5 md:flex md:flex-row hidden   dark:text-t-fonta transition-colors duration-700 text-b-black md:items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="border-b border-kuning"
            spy={true}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="border-b border-kuning"
            spy={true}
            // offset={-50}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skille"
            smooth={true}
            duration={500}
            activeClass="border-b border-kuning"
            spy={true}
            className="cursor-pointer"
          >
            Skill
          </Link>
          <Link
            to="workss"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Works
          </Link>
          <Link
            to="client"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Client
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
          <button
            onClick={() => setDark(!isDark)}
            className="px-1 rounded-full ring-1 bg-f-text dark:bg-none md:flex hidden transition-all duration-700 "
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
        <div
          className={`
    md:hidden block dark:bg-f-text absolute top-10 right-0
    overflow-hidden transition-all duration-300 bg-t-fonta
    ${
      click
        ? "opacity-100 translate-y-0 w-40 px-3 py-3 max-h-96"
        : "opacity-0 -translate-y-3 w-0 px-0 py-0 max-h-0"
    }
  `}
        >
          <div className="flex flex-col gap-2  ">
            <Link
              onClick={() => setClick(false)}
              to="home"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              spy={true}
              className="cursor-pointer "
            >
              Home
            </Link>
            <Link
              onClick={() => setClick(false)}
              to="about"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              spy={true}
              // offset={-50}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={() => setClick(!click)}
              to="skille"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              className="cursor-pointer"
            >
              Skill
            </Link>
            <Link
              onClick={() => setClick(!click)}
              to="workss"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              className="cursor-pointer"
            >
              Works
            </Link>
            <Link
              onClick={() => setClick(!click)}
              to="client"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              className="cursor-pointer"
            >
              Client
            </Link>
            <Link
              onClick={() => setClick(!click)}
              to="contact"
              smooth={true}
              duration={500}
              activeClass="border-b dark:border-kuning w-20 dark:text-kuning  text-f-text"
              className="cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
