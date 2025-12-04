import { useState } from "react";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import MySkill from "../Components/MySkill";
import Myworks from "../Components/Myworks";

const Utama = () => {
  const [isDark, setDark] = useState(true);
  return (
    <div className={`${isDark ? "dark" : ""} `}>
      <div className="bg-b-white dark:bg-bacg  transition-colors duration-700">
        <Navbar isDark={isDark} setDark={setDark} />
        <Home />
        <About />
        <MySkill />
        <Myworks />
      </div>
    </div>
  );
};
export default Utama;
