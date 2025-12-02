import tailwindcss from "../assets/logo_tailwincss.svg";
import js from "../assets/javasript.svg";
import react from "../assets/react.svg";
const MySkill = () => {
  return (
    <div
      id="works"
      className="md:container pb-10  mx-auto dark:text-t-fonta  px-3 lg:px-10 flex   min-h-200 "
    >
      <div className="flex flex-col  gap-2 w-full px-2">
        <div className="">
          <h1 className="text-[1rem] md:text-[1.5rem] dark:text-putih ">
            My Skill
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full flex flex-col md:flex-1 items-center py-2 px-2 gap-1 rounded-md ">
            <img
              src={js}
              alt=""
              className="w-15 h-15 object-contain items-center shadow-amber-300 shadow-lg duration-500 transition-shadow"
            />
            <h1 className="dark:text-kuning text-[1rem]">JavaScript</h1>
            <p className="w-70 md:w-50 text-center text-[0.9rem]">
              Memiliki kemampuan yang Standar dalam menggunakan JavaScript{" "}
            </p>
          </div>
          <div className="md:flex-1  w-full flex flex-col items-center py-2 px-2 gap-1 rounded-md">
            <img
              src={react}
              alt=""
              className="w-15 h-15 object-contain items-center shadow-sky-500 shadow-lg duration-500 transition-shadow"
            />
            <h1 className="dark:text-kuning text-[1rem]">React Js</h1>
            <p className="w-70 md:w-50 text-center text-[0.9rem]">
              Memiliki kemampuang yang diatas standar dalam menggunakan ReactJs
            </p>
          </div>
          <div className="md:flex-1 w-full flex flex-col items-center py-2 px-2 gap-1 rounded-md">
            <img
              src={tailwindcss}
              alt=""
              className=" w-15 h-15 object-contain items-center shadow-sky-500 shadow-lg duration-500 transition-shadow"
            />
            <h1 className="dark:text-kuning text-[1rem]">TailwindCss</h1>
            <p className="w-70 md:w-50 text-center text-[0.9rem]">
              memiliki kemampuang yang diatas standar dalam menggunakan
              TailwindCss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
