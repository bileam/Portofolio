import { useState } from "react";
import Zoom_in from "./Animasi/Zoom_in";
import email from "../assets/files/email.svg";
import call from "../assets/files/telpon.svg";
import pin from "../assets/files/pin.svg";

const Contect = () => {
  const [modal, setmodal] = useState(false);
  const handleKirim = (e) => {
    e.preventDefault();
    setmodal(true);
    setTimeout(() => {
      setmodal(false);
    }, 1500);
  };
  return (
    <div
      id="contect"
      className="pt-22 relative md:pt-22 w-full min-h-screen pb-2 md:container md:px-3 mx-auto lg:px-10"
    >
      <div className="w-full px-5">
        <div className="flex justify-between">
          <Zoom_in>
            <h1 className="dark:text-t-fonta text-[1.2rem] font-bold transition-colors duration-500 ease-in-out">
              Contect Me
            </h1>
          </Zoom_in>
          <Zoom_in>
            <button className="dark:text-kuning ease-in-out transition-colors duration-500 border-b-2 text-[0.9rem]">
              See All
            </button>
          </Zoom_in>
        </div>
        <div className="flex mt-6 gap-10 flex-col md:flex-row dark:text-t-fonta transition-colors duration-500 ease-in-out">
          <div className="md:w-[70%] flex flex-col gap-8">
            <div className="flex gap-5 items-center">
              <Zoom_in>
                <img
                  src={pin}
                  alt=""
                  className=" w-8 h-8 rounded-full object-contain"
                />
              </Zoom_in>
              <Zoom_in>
                <p className="text-[1rem]">Jl. margosari 2, salatiga</p>
              </Zoom_in>
            </div>
            <div className="flex gap-5 items-center">
              <Zoom_in>
                {" "}
                <img
                  src={call}
                  alt=""
                  className="object-cover w-8 h-8 rounded-full"
                />
              </Zoom_in>
              <Zoom_in>
                {" "}
                <p className="text-[1rem]">+62 8142 9225 97</p>
              </Zoom_in>
            </div>
            <div className="flex gap-5 items-center">
              <Zoom_in>
                {" "}
                <img
                  src={email}
                  alt=""
                  className=" w-8 h-8 rounded-full object-cover"
                />
              </Zoom_in>
              <Zoom_in>
                {" "}
                <p className="text-[1rem]">bileammangalla12@gmail.com</p>
              </Zoom_in>
            </div>
          </div>
          <div className="w-full">
            <form action="" className="flex flex-col gap-5">
              <Zoom_in>
                {" "}
                <input
                  required
                  type="text"
                  placeholder="your name "
                  className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent"
                />
              </Zoom_in>
              <Zoom_in>
                {" "}
                <input
                  type="text"
                  placeholder="your Email "
                  required
                  className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent"
                />
              </Zoom_in>
              <Zoom_in>
                {" "}
                <textarea
                  name=""
                  id=""
                  placeholder="typing your message"
                  className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent  md:min-h-50 "
                ></textarea>
              </Zoom_in>
              <div className="w-full  flex justify-end md:justify-center">
                <Zoom_in>
                  <button
                    onClick={handleKirim}
                    className="bg-tombol  py-2 px-10 md:min-w-40 rounded-lg dark:text-black"
                  >
                    Kirim
                  </button>
                </Zoom_in>
              </div>
            </form>
          </div>
        </div>
        {modal && (
          <div
            className={` absolute transform ${
              modal
                ? "md:-translate-50 -translate-10 min-h-auto"
                : "translate-0 opacity-100 "
            } bottom-[18%] transition-transform duration-700 ease-in-out right-[20%]  dark:dark:bg-t-fonta/80 p-4 rounded-lg`}
          >
            Pesan anda telah terkirim
          </div>
        )}
      </div>
    </div>
  );
};

export default Contect;
