import { useState } from "react";
import gambar from "../assets/javasript.svg";
import tailwindcss from "../assets/logo_tailwincss.svg";
import react from "../assets/react.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { Skil } from "../dataArray/Skil";
import Zoom_in from "./Animasi/Zoom_in";
import useSmoothScroll from "../hooks/useSmoothScroll ";
const Latihan = () => {
  useSmoothScroll();
  const [cleck, setCleck] = useState(null);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef([]);
  const started = useRef([]);
  const [counts, setCounts] = useState(Skil.map(() => 0));

  const getData = async () => {
    // try {
    //   const response = await fetch("http://localhost:3000/skill/get");
    //   const result = await response.json();
    //   setDatas(result);
    //   setLoading(false);
    // } catch (error) {
    //   console.log("error terjadi", error);
    //   setLoading(false);
    // }
  };
  const animateCount = (index, target) => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = () => {
      start += increment;

      if (start < target) {
        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = Math.ceil(start);
          return copy;
        });
        requestAnimationFrame(counter);
      } else {
        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = target;
          return copy;
        });
      }
    };

    counter();
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;

          if (entry.isIntersecting && !started.current[index]) {
            // started.current[index] = false;
            started.current[index] = true;
            animateCount(index, Skil[index].penguasaaan);
          }
        });
      },
      { threshold: 0.9 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleClik = (id) => {
    if (window.innerWidth < 768) {
      setCleck(cleck === id ? null : id);
    }
  };

  return (
    <div
      id="skille"
      className="min-h-screen px-10 mt-60  flex flex-col  text-white md:container  mx-auto relative"
    >
      <div className="md:text-[4rem] text-[2rem] sticky  flex  justify-center top-[50%] bottom-0 mt-0  z-0 mb-[20%] w-full">
        <h1 className="font-mono">My Skill</h1>
      </div>
      <div className="flex flex-col mt-20 mb-[50%] gap-40 ">
      
        {Skil.map((item, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            key={index}
            onClick={() => handleClik(index)}
            style={{ backgroundImage: `url(${gambar})` }}
            className={`md:w-[50%] w-full  overflow-hidden shadow-2xl active:scale-105 md:active:scale-none md:hover:scale-105 transition duration-500 relative group  rounded-2xl     h-80    dark:bg-f-text  
            
           ${index == 0 ? "self-start" : "self-center"}
           ${index == 2 ? "self-start" : "self-center"}
           ${index == 4 ? "self-start" : "self-center"}

            z-1`}
          >
            <div className="flex flex-col justify-end h-full relative ">
              <div
                className={`absolute text-[4rem] 
              ${
                cleck === index
                  ? "scale-100 transition-all duration-500 ease-in-out"
                  : ""
              }
               md:group-hover:scale-110  transition-all duration-700 -translate-y-[150%] text-white group-hover:text-shadow-purple   w-full flex justify-center`}
              >
                <h1 className="md:hidden   text-[3rem] w-100 flex justify-center  ">
                  {" "}
                  {cleck === index ? (
                    <span
                      className={`shadow-2xl shadow-purple-400 rounded-full`}
                    >
                      {counts[index]}%
                    </span>
                  ) : (
                    <span>{counts[index]}%</span>
                  )}
                </h1>
                <h1 className="hidden md:block">{counts[index]}%</h1>
              </div>
              <div
                className={`md:group-hover:-translate-y-100 ${
                  cleck === index ? "-translate-y-100 delay-0 " : "delay-300"
                }  md:group-hover:delay-0  flex flex-col items-center pb-5  md:delay-300
              transition-all  duration-700 ease-in-out`}
              >
                <h1 className=" font-mono relative text-[1.5rem]">
                  {item.nama}
                </h1>
              </div>
              <div
                className={`md:group-hover:translate-y-0 
               md:translate-y-full 
               ${
                 cleck === index
                   ? "translate-y-0 delay-300"
                   : "translate-y-full "
               } 

            md:group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-black/40`}
              >
                <div className="relative w-full h-full flex-col flex items-center p-3 justify-center">
                  <img src={item.gambar} alt="" className="w-20" />
                  <h1 className="text-[1.5rem]">{item.nama}</h1>
                  <p className="text-stars max-w-[95%] overflow-hidden text-[0.9rem] ">
                    {item.deskripsi}
                 
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latihan;
