import { useState } from "react";
import tas from "../assets/Gambar/Tas.png";
import { useEffect } from "react";
import { useRef } from "react";
import Zoom_in from "./Animasi/Zoom_in";

const Myworks = () => {
  const [datas, setDatas] = useState([]);
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

  console.log(datas);
  return (
    <div
      ref={ref}
      id="workss"
      className={`md:container pt-20  md:pt-25 font-sans pb-10  mx-auto dark:text-t-fonta  px-3 lg:px-10 flex  
     `}
    >
      <div className="flex flex-col w-full gap-7">
        <div className="w-full  flex  justify-between px-2">
          <h1>My Works</h1>
          <button className="cursor-pointer border-b text-[0.9rem] dark:text-kuning">
            see all
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-5 px-2 md:px-0 ">
          {datas.map((item, index) => (
            <Zoom_in>
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
                    className="px-4 py-1 dark:bg-kuning bg-t-fonta hover: rounded-md hover:dark:bg-bacg transition duration-500 hover:dark:text-kuning text-black text-[0.9rem] mt-3"
                  >
                    view Project
                  </a>
                </div>
              </div>
            </Zoom_in>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myworks;
