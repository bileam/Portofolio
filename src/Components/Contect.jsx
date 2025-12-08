const Contect = () => {
  return (
    <div id="contect" className="pt-22 md:pt-22 w-full min-h-screen pb-2">
      <div className="w-full px-5">
        <div className="flex justify-between">
          <h1 className="dark:text-t-fonta text-[1.2rem] font-bold transition-colors duration-500 ease-in-out">
            Contect Me
          </h1>
          <button className="dark:text-kuning ease-in-out transition-colors duration-500 border-b-2 text-[0.9rem]">
            See All
          </button>
        </div>
        <div className="flex mt-6 gap-10 flex-col md:flex-row dark:text-t-fonta transition-colors duration-500 ease-in-out">
          <div className="md:w-[70%] flex flex-col gap-8">
            <div className="flex gap-5 items-center">
              <img src="" alt="" className="border w-8 h-8 rounded-full" />
              <p className="text-[1rem]">Jl. margosari 2, salatiga</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src="" alt="" className="border w-8 h-8 rounded-full" />
              <p className="text-[1rem]">+62 8142 9225 97</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src="" alt="" className="border w-8 h-8 rounded-full" />
              <p className="text-[1rem]">bileammangalla12@gmail.com</p>
            </div>
          </div>
          <div className="w-full">
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="your name "
                className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent"
              />

              <input
                type="text"
                placeholder="your name "
                className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent"
              />
              <textarea
                name=""
                id=""
                placeholder="typing your message"
                className="w-full py-3 rounded-md px-4 dark:bg-f-text focus:ring-0 focus:outline-0 focus:border-transparent  md:min-h-50 "
              ></textarea>
              <div className="w-full  flex justify-end md:justify-center">
                <button className="bg-tombol  py-2 px-10 md:min-w-40 rounded-lg dark:text-black">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
