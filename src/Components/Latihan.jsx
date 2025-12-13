import { useState } from "react";
import gambar from "../assets/javasript.svg";
import tailwindcss from "../assets/logo_tailwincss.svg";
import react from "../assets/react.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { Skil } from "../dataArray/Skil";
import Zoom_in from "./Animasi/Zoom_in";
const Latihan = () => {
  const [cleck, setCleck] = useState(null);
  const cardRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    getData();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setCleck(null); // reset saat keluar layar
        }
      },
      { threshold: 0.3 } // 10% terlihat dianggap “hadir”
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleClik = (id) => {
    if (window.innerWidth < 768) {
      setCleck(cleck === id ? null : id);
    }
  };

  return (
    <div
      ref={cardRef}
      id="skille"
      className="min-h-screen px-10   flex flex-col  text-white md:container  mx-auto relative"
    >
      {/* <div className="sticky text-white inset-x-5 border  top-[50%] bottom-0">
        <h1 className=" ">testing</h1>
      </div> */}

      <div className="md:text-[4rem] text-[2rem] sticky  flex  justify-center top-[50%] bottom-0 mt-0  z-0 mb-[20%] w-full">
        <h1 className="font-mono">My Skill</h1>
      </div>
      <div className="flex flex-col mt-20 mb-[50%] gap-40 ">
        {/* Item 1 kiri */}
        {Skil.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClik(index)}
            style={{ backgroundImage: `url(${gambar})` }}
            className={`md:w-[50%] w-full  overflow-hidden relative group      h-80    dark:bg-f-text  
            
           ${index == 0 ? "self-start" : "self-center"}
           ${index == 2 ? "self-start" : "self-center"}

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
               md:group-hover:scale-125  transition-all duration-700 -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center`}
              >
                <h1 className="md:hidden   text-[3rem] w-100 flex justify-center  ">
                  {cleck === index ? (
                    <span
                      className={`shadow-2xl shadow-purple-400 rounded-full`}
                    >
                      Omaigattt!!!
                    </span>
                  ) : (
                    <span> Don't Cleck</span>
                  )}
                </h1>
                <h1 className="hidden md:block">Hover Me</h1>
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
                    {/* {item.deskripsi} */}
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
