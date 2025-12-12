import { useEffect, useState } from "react";
import Zoom_in from "./Animasi/Zoom_in";

const Client = () => {
  const [datas, setDatas] = useState([]);
  useState(() => {
    fetch("/data/client.json")
      .then((res) => res.json())
      .then((result) => setDatas(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      id="client"
      className="md:container min-h-screen pt-25  md:py-25 font-sans   mx-auto dark:text-t-fonta  px-5 lg:px-10 flex   md:min-h-auto  "
    >
      <div className="flex flex-col w-full  gap-5 ">
        <div className="w-full flex justify-between">
          <h1 className="text-[1.2rem]">My Clients</h1>
          <a
            href="#"
            className="text-[0.9rem] border-b-2 md:border-b-0 dark:text-kuning"
          >
            See All
          </a>
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className=" w-full animate-slide-left hover:pause-animation  mt-5 flex md:gap-10 gap-5 flex-wrap justify-center  transition-all duration-700">
            {datas.map((item, index) => (
              <Zoom_in className="dark:bg-f-text max-w-[47%] md:w-[31%]  hover:scale-110   rounded-2xl flex flex-col items-center py-6     gap-2 shadow-lg">
                <img
                  src={item.image}
                  alt=""
                  className="w-15 md:w-30 md:h-30  rounded-full h-15 animate-rotateY  object-cover bg-center"
                />
                <h1 className="text-[0.9rem] font-semibold">{item.name}</h1>
                <p className="max-w-[99%]  overflow-hidden max-h-30 text-center text-[0.8rem]">
                  {item.message}
                </p>
              </Zoom_in>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
