import image1 from "../../assets/Alone/01.jpeg";
import image4 from "../../assets/Alone/02.jpeg";
import image2 from "../../assets/Alone/04.jpeg";
import image3 from "../../assets/Alone/03.jpeg";
import Zoom_in from "../Animasi/Zoom_in";
import { Sendiri } from "../../dataArray/Sendiri";
const Alone = () => {
  return (
    <div className="flex  md:flex-row flex-col items-center  md:justify-center">
      {Sendiri.map((item, index) => (
        <Zoom_in
          key={index}
          className="relative max-w-[70%] lg:max-w-[29%] md:min-w-[29%] hover:scale transition duration-700  overflow-hidden group"
        >
          <img
            src={item.gambar}
            alt=""
            className="object-contain object-center w"
          />
          <div
            className={`absolute delay-700 group-hover:delay-0 translate-x-full  group-hover:translate-x-0 transition-transform duration-700 top-0 h-[50%] w-full bg-black/40 text-black`}
          >
            <div className="flex relative">
              <div className="flex flex-col  max-w-40 overflow-hidden items-stars text-white font-black absolute right-4 top-2">
                <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300 ">
                  {item.tempat}
                </h1>
                <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300">
                  {item.tanggal}
                </h1>
                <div className="absolute ease-in-out top-0 delay-0 group-hover:delay-700  bg-white w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                  -
                </div>
                <div className="absolute ease-in-out bottom-0 delay-0 group-hover:delay-700 bg-white w-full translate-x-full group-hover:-translate-x-full transition-transform duration-1000">
                  fsaf
                </div>
              </div>
            </div>
          </div>
          <div
            className={` delay-700 group-hover:delay-0 -translate-x-full  group-hover:translate-x-0 transition-transform duration-700 absolute bottom-0 h-[50%] w-full bg-black/40 text-black`}
          ></div>
        </Zoom_in>
      ))}

      {/* <Zoom_in className="relative max-w-[70%] lg:max-w-[40%] md:min-w-[30%] hover:scale transition duration-700  overflow-hidden group">
        <img src={image4} alt="" className="object-contain object-center w" />
        <div
          className={`absolute delay-700 group-hover:delay-0 translate-x-full  group-hover:translate-x-0 transition-transform duration-700 top-0 h-[50%] w-full bg-black/40 text-black`}
        >
          <div className="flex relative">
            <div className="flex flex-col  max-w-35 overflow-hidden items-stars text-white font-black absolute right-4 top-2">
              <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300 ">
                Desa Dieng
              </h1>
              <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300">
                februari 2025
              </h1>
              <div className="absolute ease-in-out top-0 delay-0 group-hover:delay-700  bg-white w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                -
              </div>
              <div className="absolute ease-in-out bottom-0 delay-0 group-hover:delay-700 bg-white w-full translate-x-full group-hover:-translate-x-full transition-transform duration-1000">
                fsaf
              </div>
            </div>
          </div>
        </div>
        <div
          className={` delay-700 group-hover:delay-0 -translate-x-full  group-hover:translate-x-0 transition-transform duration-700 absolute bottom-0 h-[50%] w-full bg-black/40 text-black`}
        ></div>
      </Zoom_in>
      <Zoom_in className="relative max-w-[70%] lg:max-w-[40%] md:min-w-[30%] hover:scale transition duration-700  overflow-hidden group">
        <img src={image2} alt="" className="object-contain object-center w" />
        <div
          className={`absolute delay-700 group-hover:delay-0 translate-x-full  group-hover:translate-x-0 transition-transform duration-700 top-0 h-[50%] w-full bg-black/40 text-black`}
        >
          <div className="flex relative">
            <div className="flex flex-col  max-w-35 overflow-hidden items-stars text-white font-black absolute right-4 top-2">
              <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300 ">
                Gunung Lawu
              </h1>
              <h1 className="opacity-0 group-hover:opacity-100 group-hover:delay-1000 delay-300">
                09-januari-2025
              </h1>
              <div className="absolute ease-in-out top-0 delay-0 group-hover:delay-700  bg-white w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                -
              </div>
              <div className="absolute ease-in-out bottom-0 delay-0 group-hover:delay-700 bg-white w-full translate-x-full group-hover:-translate-x-full transition-transform duration-1000">
                fsaf
              </div>
            </div>
          </div>
        </div>
        <div
          className={` delay-700 group-hover:delay-0 -translate-x-full  group-hover:translate-x-0 transition-transform duration-700 absolute bottom-0 h-[50%] w-full bg-black/40 text-black`}
        ></div>
      </Zoom_in> */}
    </div>
  );
};

export default Alone;
