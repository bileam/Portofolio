import { useState } from "react";
import tas from "../assets/Gambar/Tas.png";
import { useEffect } from "react";
import { useRef } from "react";
import Zoom_in from "./Animasi/Zoom_in";
import Tas from "../assets/Gambar/Tas.png";

const Myworks = () => {
  const [datas, setDatas] = useState([]);
  const [cleck, setcleck] = useState(null);
  useEffect(() => {
    fetch("/data/Works.json")
      .then((res) => res.json())
      .then((result) => setDatas(result))
      .catch((err) => console.log(err));
  }, []);
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleCleck = (id) => {
    if (window.innerWidth < 768) {
      setcleck(cleck === id ? null : id);
    }
  };

  // console.log(datas);
  return (
    <div
      ref={ref}
      id="workss"
      className={`md:container min-h-screen pt-20  md:pt-25 font-sans pb-10  mx-auto dark:text-t-fonta  px-3 lg:px-10 flex  
     `}
    >
      <div className="flex flex-col w-full gap-7">
        <div className="w-full  flex  justify-between px-2">
          <h1>My Works</h1>
          <button className="cursor-pointer border-b text-[0.9rem] dark:text-kuning">
            see all
          </button>
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row gap-5 md:gap-5 px-2 md:px-0 ">
          {/* {datas.map((item, index) => (
            <Zoom_in className="w-full">
              <div
                key={index}
                className={`flex-1  shadow-2xl rounded-2xl dark:bg-f-text   
                 transition-colors duration-500`}
              >
                <img
                  src={item.gambar}
                  alt=""
                  className="w-full h-35 object-cover rounded-t-2xl bg-center "
                />
                <div className="flex flex-col items-center gap-2 mt-2 text-center pb-5 ">
                  <h1 className="text-[1.1rem] font-semi">
                    {item.namaProject}
                  </h1>
                  <h1 className="text-[0.8rem] px-6  w-[95%] overflow-hidden">
                    {item.Deskripsi}
                  </h1>
                  <a
                    href={item.link}
                    target="_blank"
                    className="px-4 py-1 dark:bg-kuning bg-t-fonta hover: rounded-md hover:dark:bg-bacg transition duration-500 hover:dark:text-kuning text-black text-[0.9rem] mt-3"
                  >
                    view Project
                  </a>
                </div>
              </div>
            </Zoom_in>
          ))} */}
          {datas.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCleck(index)}
              className={`flex md:w-[32%] flex-1 mx-auto
             
               md:group group md:bg-linear-to-r md:from-transparent md:to-transparent  h-100 transition-all duration-700 ease-in-out  overflow-hidden w-full scale-100`}
            >
              <div className=" relative flex items-center justify-center ">
                <img
                  src={tas}
                  // src={item.gambar}
                  alt=""
                  className={`w-full h-full md:object-cover   md:group-hover:scale-105 ${
                    cleck === index ? "scale-105" : ""
                  } group-hover:opacity-0 group-hover:delay-0  duration-500 transition`}
                />
                <div
                  className={`absolute inset-0 ${
                    cleck === index ? "bg-black" : ""
                  }   md:bg-transparent md:group-hover:bg-black/10 md:group-hover:backdrop-blur-sm
                   md:group-hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] group-hover:delay-200 duration-300 transition-all`}
                >
                  <div
                    className={`mt-15 flex flex-col md:group-hover:scale-110  ${
                      cleck === index ? "group:scale-110 " : ""
                    } duration-500 transition group-hover:delay-300 ease-in-out`}
                  >
                    <h1 className="font-extrabold pl-10 text-white">
                      {item.namaProject}
                    </h1>
                    <h1 className="font-semibold pl-15 text-white">
                      Penjualan Tas
                    </h1>
                  </div>
                  <div
                    className={` mt-20 px-3 -translate-x-full  max-h-20 overflow-hidden md:group-hover:translate-x-0 ${
                      cleck === index ? "translate-x-0 " : ""
                    }  transition duration-500 ease-in-out group-hover:delay-300`}
                  >
                    <p className="text-[0.7rem]    text-white">
                      {item.Deskripsi}
                    </p>
                  </div>
                  <div
                    className={`absolute group/item   max-w-23 overflow-hidden bottom-7 md:translate-y-20 md:group-hover:translate-y-0  transition duration-500 group-hover:delay-700 ${
                      cleck === index ? "translate-y-0" : "translate-y-20"
                    } right-7 text-white gap-1 flex-col flex`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      className=" text-[0.9rem]"
                    >
                      Lihat project
                    </a>
                    <div className="border-b-2 w-20  -translate-full group-hover/item:translate-0 transition duration-500 ease-in delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myworks;
