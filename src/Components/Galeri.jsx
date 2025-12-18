import { useState } from "react";
import Alone from "./Galery/Alone";
import Badminton from "./Galery/Badminton";
import Frends from "./Galery/Frends";

const Galery = () => {
  const [display, setDisplay] = useState("Alone");
  const [translate, setTranslate] = useState(true);

  let dis;

  if (display === "Alone") {
    dis = <Alone />;
  } else if (display === "Friend") {
    dis = <Frends />;
  } else if (display === "Badminton") {
    dis = <Badminton />;
  }

  //   console.log(display);
  return (
    <div 
    id="galeri" className="min-h-screen md:container   md:mx-auto  md:px-10 px-2 mt-10   text-white gap-5  flex-col flex w-full items-center lg:items-end py-5">
      <div className="bg-f-text  z-10   md:w-[50%] rounded-2xl py-2 px-2 flex justify-center items-center ">
        <div
          onClick={() => setTranslate("Alone")}
          className={`overflow-hidden max-w-25 min-w-25  relative py-1    rounded-xl text-center ${
            display == "Alone" ? " font-bold" : ""
          }  mx-auto my-auto`}
        >
          <div
            className={`absolute  transition duration-500 ${
              translate === "Alone" ? "translate-x-0" : "translate-x-full"
            }   h-8 top-0 right-0 rounded-xl bg-bacg max-w-25 min-w-25 `}
          ></div>
          <button
            onClick={() => setDisplay("Alone")}
            className="relative w-full h-full"
          >
            Alone
          </button>
        </div>
        <div
          onClick={() => setTranslate("Friend")}
          className={`overflow-hidden max-w-25 min-w-25  relative py-1    rounded-xl text-center ${
            display == "Friend" ? " font-bold" : ""
          }  mx-auto my-auto`}
        >
          <div
            className={`absolute  transition duration-500 ${
              translate === "Friend" ? "translate-x-0" : "-translate-x-full"
            }   h-8 top-0 right-0 rounded-xl bg-bacg max-w-25 min-w-25 `}
          ></div>
          <button
            onClick={() => setDisplay("Friend")}
            className="relative w-full h-full"
          >
            Friend
          </button>
        </div>
        <div
          onClick={() => setTranslate("Badminton")}
          className={`overflow-hidden max-w-25 min-w-25  relative py-1   rounded-xl text-center ${
            display == "Badminton" ? " font-bold" : ""
          }  mx-auto my-auto`}
        >
          <div
            className={`absolute  transition duration-500 ${
              translate === "Badminton" ? "translate-x-0" : "-translate-x-full"
            }   h-8 top-0 right-0 rounded-xl bg-bacg max-w-25 min-w-25 `}
          ></div>
          <button
            onClick={() => setDisplay("Badminton")}
            className="relative w-full h-full"
          >
            Badminton
          </button>
        </div>
      </div>
      <div className=" w-full  flex justify-center items-center md:flex-row flex-col">
        {dis}
      </div>
    </div>
  );
};

export default Galery;
