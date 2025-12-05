import gambar from "../assets/Gambar/gam1.png";
import react from "../assets/react.svg";
import tailwind from "../assets/logo_tailwincss.svg";
import js from "../assets/javasript.svg";
import Zoom_in from "./Animasi/Zoom_in";
const About = () => {
  return (
    <div
      id="about"
      className="pt-40  md:pt-0 md:container   md:mx-auto   lg:min-h-screen    px-3 lg:px-10   md:h-[50vh]  flex flex-col justify-center  md:justify-center md:min-h-screen  lg:justify-center md:pb-0  "
    >
      <Zoom_in>
        <div className=" flex md:flex-row flex-col  items-center  justify-start gap-6 md:gap-0">
          <div className=" z-3 dark:text-t-fonta   flex-col items-center group">
            <div className="flex justify-between">
              <img
                src={js}
                className=" animate-bounce overflow-hidden  md:group-hover:-translate-y-10 -translate-y-5   md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:w-9  object-contain w-7 md:object-contain"
              />
              <img
                src={tailwind}
                className="animate-bounce overflow-hidden md:group-hover:-translate-y-16 -translate-y-13 transition-all duration-700 md:opacity-0 group-hover:opacity-100 md:w-9  object-contain w-7 md:object-contain"
              />
              <img
                src={react}
                className="animate-bounce overflow-hidden md:group-hover:-translate-y-10 -translate-y-5 transition-all  duration-1000 md:opacity-0 group-hover:opacity-100 md:w-10 object-contain w-7 md:object-contain"
              />
            </div>
            <img src={gambar} alt="" className="object-cover md:w-auto w-65" />
          </div>
          <div className="flex-1 z-1 ">
            <div className="rounded-xl shadow-2xl shadow-black w-80 h-full  sm:w-full lg:w-[90%] lg:translate-y-4  md:-translate-x-17 py-3 px-3 md:px-0 shadow-l-2xl dark:bg-f-text flex flex-col gap-2 ">
              <h1 className="dark:text-kuning font-semibold text-[1rem] md:pl-20  md:text-[1rem] lg:text-[1.3rem]">
                Tentang saya
              </h1>
              <p className="dark:text-t-fonta lg:text-[0.9rem] md:pl-20 text-[0.8rem] md:text-[0.8rem]">
                Saya Bileam Mangalla, Web Developer berusia 22 tahun dari
                Universitas Kristen Satya Wacana. Saya fokus pada pembuatan
                website yang responsif, modern, dan mudah digunakan, serta terus
                mengembangkan kemampuan dalam teknologi web.
                <br />
                <span className="text-pink-600 border-b md:opacity-100 opacity-0  ">
                  Hover Image
                </span>
              </p>
            </div>
          </div>
        </div>
      </Zoom_in>
    </div>
  );
};

export default About;
