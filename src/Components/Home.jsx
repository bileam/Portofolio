import gambar1 from "../assets/Gambar/noBGgambar.png";
const Home = () => {
  return (
    <div
      id="home"
      className="md:container min-h-svh mx-auto md:py-4  px-3 lg:px-10   flex flex-col justify-center  "
    >
      <div className="flex md:flex-row flex-col ">
        <div className="flex flex-col flex-1 gap-5 order-2 md:order-1">
          <h1 className="dark:text-kuning font-bold text-center md:text-start w-[90%] md:w-[60%]  text-[1.9rem] md:text-[2.4rem]">
            hi i'a bileam web developer
          </h1>
          <p className="dark:text-t-fonta md:text-[1rem] text-[0.9rem] dark:font-extralight  md:text-start   w-[90%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, dicta dolorem delectus illum perspiciatis repudiandae.
            Alias minus consequatur veritatis doloribus eos aperiam, aspernatur,
            eaque illo quidem minima incidunt deleniti culpa?
          </p>
          <div className="flex gap-2  ">
            <button className="bg-kuning  cursor-pointer px-7 py-1 rounded-lg shadow-2xl dark:text-black  font-extralight">
              Hare me
            </button>
            <a
              href="/CV-Bileam_Mangalla.pdf"
              download
              className="dark:border-kuning cursor-pointer border dark:text-kuning  px-2 py-1 rounded-lg shadow-2xl "
            >
              Download Cv
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center order-1 md:order-2 ">
          <img src={gambar1} alt="" className="object-cover md:w-auto w-80" />
        </div>
      </div>
    </div>
  );
};
export default Home;
