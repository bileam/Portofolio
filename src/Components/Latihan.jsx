import gambar from "../assets/javasript.svg";
const Latihan = () => {
  return (
    <div className="min-h-screen px-10   flex flex-col  text-white md:container  mx-auto relative">
      {/* <div className="sticky text-white inset-x-5 border  top-[50%] bottom-0">
        <h1 className=" ">testing</h1>
      </div> */}

      <div className="text-[4rem] sticky  flex  justify-center top-[50%] bottom-0 mt-0  z-0 mb-[20%] w-full">
        <h1 className="font-mono">My Skill</h1>
      </div>
      <div className="flex flex-col mt-20 mb-[50%] gap-40 ">
        {/* Item 1 kiri */}
        <div
          style={{ backgroundImage: `url(${gambar})` }}
          className="md:w-[50%] w-[70%] overflow-hidden relative group      h-80    dark:bg-f-text self-start z-1"
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div className="absolute text-[4rem] -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center">
              <h1>hover me</h1>
            </div>
            <div
              className="group-hover:-translate-y-100 group-hover:delay-0  flex flex-col items-center pb-5  delay-300
              transition-all group-hover  duration-700 ease-in-out"
            >
              <h1 className=" font-mono relative text-[1.5rem]">JavaScript</h1>
            </div>
            <div
              className="group-hover:translate-y-0 
               translate-y-full 
            group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-black/5 rounded-2xl "
            >
              <div className="absolute w-full flex h-full  flex-col justify-center items-center ">
                <img src={gambar} alt="" className="w-20" />
              </div>

              <div className="relative w-full h-full flex-col flex">
                <h1>sagasga</h1>
                <h1>sagasga</h1>
                <h1>sagasga</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${gambar})` }}
          className="md:w-[50%] w-[70%] overflow-hidden relative group      h-80   dark:bg-f-text self-center z-1"
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div className="absolute text-[4rem] -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center">
              <h1>hover me</h1>
            </div>
            <div
              className="group-hover:-translate-y-100 group-hover:delay-0  flex flex-col items-center pb-5  delay-300
              transition-all group-hover  duration-700 ease-in-out"
            >
              <h1 className=" font-mono relative text-[1.5rem]">JavaScript</h1>
            </div>
            <div
              className="group-hover:translate-y-0 
               translate-y-full 
            group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-black/5 rounded-2xl "
            >
              <div className="absolute w-full flex h-full  flex-col justify-center items-center ">
                <img src={gambar} alt="" className="w-20" />
              </div>

              <div className="relative w-full h-full flex-col flex">
                <h1>sagasga</h1>
                <h1>sagasga</h1>
                <h1>sagasga</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${gambar})` }}
          className="md:w-[50%] w-[70%] overflow-hidden relative group      h-80   dark:bg-f-text self-start z-1"
        >
          <div className="flex flex-col justify-end h-full relative ">
            <div className="absolute text-[4rem] -translate-y-[150%] text-purple-400 group-hover:text-shadow-purple   w-full flex justify-center">
              <h1>hover me</h1>
            </div>
            <div
              className="group-hover:-translate-y-100 group-hover:delay-0  flex flex-col items-center pb-5  delay-300
              transition-all group-hover  duration-700 ease-in-out"
            >
              <h1 className=" font-mono relative text-[1.5rem]">JavaScript</h1>
            </div>
            <div
              className="group-hover:translate-y-0 
               translate-y-full 
            group-hover:delay-300 delay-0 duration-700 absolute inset-0 transition-transform ease-in-out  bg-black/5 rounded-2xl "
            >
              <div className="absolute w-full flex h-full  flex-col justify-center items-center ">
                <img src={gambar} alt="" className="w-20" />
              </div>

              <div className="relative w-full h-full flex-col flex">
                <h1>sagasga</h1>
                <h1>sagasga</h1>
                <h1>sagasga</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 tengah */}
      </div>
    </div>
  );
};

export default Latihan;
