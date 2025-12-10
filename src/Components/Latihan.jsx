import { useState } from "react";
import gambar from "../assets/javasript.svg";
import tailwindcss from "../assets/logo_tailwincss.svg";
import react from "../assets/react.svg";
import { useRef } from "react";
import { useEffect } from "react";
const Latihan = () => {
  const [cleck, setCleck] = useState(null);
  const cardRef = useRef(null);
  useEffect(() => {
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
        <div
          onClick={() => handleClik(1)}
          style={{ backgroundImage: `url(${gambar})` }}
          className={`md:w-[50%] w-full  overflow-hidden relative group      h-80    dark:bg-f-text self-start z-1`}
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div
              className={`absolute text-[4rem]
              ${
                cleck === 1
                  ? "scale-100 transition-all duration-500 ease-in-out"
                  : ""
              }
               md:group-hover:scale-125  transition-all duration-700 -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center`}
            >
              <h1 className="md:hidden   text-[3rem] w-100 flex justify-center  ">
                {cleck === 1 ? (
                  <span className={`shadow-2xl shadow-purple-400 rounded-full`}>
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
                cleck === 1 ? "-translate-y-100 delay-0 " : "delay-300"
              }  md:group-hover:delay-0  flex flex-col items-center pb-5  md:delay-300
              transition-all  duration-700 ease-in-out`}
            >
              <h1 className=" font-mono relative text-[1.5rem]">JavaScript</h1>
            </div>
            <div
              className={`md:group-hover:translate-y-0 
               md:translate-y-full 
               ${cleck === 1 ? "translate-y-0 delay-300" : "translate-y-full "} 

            md:group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-purple-400/20 rounded-2xl `}
            >
              <div className="relative w-full h-full flex-col flex items-center p-3 justify-center">
                <img src={gambar} alt="" className="w-20" />
                <h1 className="text-[1.5rem]">Java Script</h1>
                <p className="text-justify max-w-[95%] overflow-hidden text-[0.9rem]">
                  JavaScript (JS) adalah bahasa pemrograman yang digunakan untuk
                  membuat halaman web menjadi interaktif, dinamis, dan hidup.
                  Jika HTML adalah kerangka, dan CSS adalah tampilan, maka
                  JavaScript adalah otak yang membuat website bisa bergerak dan
                  merespons pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* dua */}
        <div
          onClick={() => handleClik(2)}
          style={{ backgroundImage: `url(${gambar})` }}
          className={`md:w-[50%] w-full  overflow-hidden relative group      h-80    dark:bg-f-text self-center z-1`}
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div
              className={`absolute text-[4rem]
              ${
                cleck === 2
                  ? "scale-100 transition-all duration-500 ease-in-out"
                  : ""
              }
               md:group-hover:scale-125  transition-all duration-700 -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center`}
            >
              <h1 className="md:hidden   text-[3rem] w-100 flex justify-center  ">
                {cleck === 2 ? (
                  <span className={`shadow-2xl shadow-purple-400 rounded-full`}>
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
                cleck === 2 ? "-translate-y-100 delay-0 " : "delay-300"
              }  md:group-hover:delay-0  flex flex-col items-center pb-5  md:delay-300
              transition-all  duration-700 ease-in-out`}
            >
              <h1 className=" font-mono relative text-[1.5rem]">React Js</h1>
            </div>
            <div
              className={`md:group-hover:translate-y-0 
               md:translate-y-full 
               ${cleck === 2 ? "translate-y-0 delay-300" : "translate-y-full "} 

            md:group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-purple-400/20 rounded-2xl `}
            >
              <div className="relative w-full h-full flex-col flex items-center p-3 justify-center">
                <img src={react} alt="" className="w-20" />
                <h1 className="text-[1.5rem]">React Js</h1>
                <p className="text-justify max-w-[95%] overflow-hidden text-[0.9rem]">
                  React.js adalah library JavaScript yang digunakan untuk
                  membangun user interface (UI) pada aplikasi web. React dibuat
                  oleh Facebook (sekarang Meta) dan sangat populer karena cepat,
                  fleksibel, dan mudah digunakan. Dengan React, kamu dapat
                  membuat tampilan web berupa komponen—bagian-bagian kecil UI
                  yang bisa digunakan ulang, seperti tombol, card, navbar, form,
                  dll.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* tiga */}
        <div
          onClick={() => handleClik(3)}
          style={{ backgroundImage: `url(${gambar})` }}
          className={`md:w-[50%] w-full  overflow-hidden relative group      h-80    dark:bg-f-text self-stars z-1`}
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div
              className={`absolute text-[4rem]
              ${
                cleck === 3
                  ? "scale-100 transition-all duration-500 ease-in-out"
                  : ""
              }
               md:group-hover:scale-125  transition-all duration-700 -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center`}
            >
              <h1 className="md:hidden   text-[3rem] w-100 flex justify-center  ">
                {cleck === 3 ? (
                  <span className={`shadow-2xl shadow-purple-400 rounded-full`}>
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
                cleck === 3 ? "-translate-y-100 delay-0 " : "delay-300"
              }  md:group-hover:delay-0  flex flex-col items-center pb-5  md:delay-300
              transition-all  duration-700 ease-in-out`}
            >
              <h1 className=" font-mono relative text-[1.5rem]">TailwindCss</h1>
            </div>
            <div
              className={`md:group-hover:translate-y-0 
               md:translate-y-full 
               ${cleck === 3 ? "translate-y-0 delay-300" : "translate-y-full "} 

            md:group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-purple-400/20 rounded-2xl `}
            >
              <div className="relative w-full h-full flex-col flex items-center p-3 justify-center">
                <img src={tailwindcss} alt="" className="w-20" />
                <h1 className="text-[1.5rem]">TailwindCss</h1>
                <p className="text-justify max-w-[95%] overflow-hidden text-[0.9rem]">
                  Tailwind CSS adalah utility-first CSS framework yang
                  menyediakan kelas-kelas kecil siap pakai untuk membuat
                  tampilan website secara cepat dan fleksibel. Berbeda dengan
                  framework lain seperti Bootstrap yang menyediakan komponen
                  jadi (navbar, card, modal), Tailwind memberi kamu kebebasan
                  penuh melalui kelas-kelas utility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latihan;
