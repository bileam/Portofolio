import tas from "../assets/Gambar/Tas.png";

const Myworks = () => {
  return (
    <div
      id="workss"
      className="md:container pt-40 md:pt-40 font-sans pb-10  mx-auto dark:text-t-fonta  px-3 lg:px-10 flex    "
    >
      <div className="flex flex-col w-full gap-7">
        <div className="w-full  flex  justify-between px-2">
          <h1>My Works</h1>
          <button className="cursor-pointer border-b text-[0.9rem] dark:text-kuning">
            see all
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-5 px-10 md:px-0 ">
          <div className="flex-1  shadow-2xl rounded-2xl dark:bg-f-text transition-colors duration-500">
            <img
              src={tas}
              alt=""
              className="w-full h-35 object-cover rounded-t-2xl bg-center "
            />
            <div className="flex flex-col items-center gap-2 mt-2 text-center mb-3">
              <h1 className="text-[1.1rem] font-semi">Toko Tas</h1>
              <h1 className="text-[0.8rem] px-6  w-[95%] overflow-hidden">
                sebuah web penjualan tas online toko Aura & co.
              </h1>
              <a
                href="https://web-tas-h6ax.vercel.app/"
                className="px-4 py-1 dark:bg-kuning bg-t-fonta hover: rounded-md hover:dark:bg-bacg transition duration-500 hover:dark:text-kuning text-black text-[0.9rem] mt-3"
              >
                view Project
              </a>
            </div>
          </div>
          <div className="flex-1  shadow-2xl rounded-2xl dark:bg-f-text transition-colors duration-500">
            <img
              src={tas}
              alt=""
              className="w-full h-35 object-cover rounded-t-2xl bg-center "
            />
            <div className="flex flex-col items-center gap-2 mt-2 text-center mb-3">
              <h1 className="text-[1.1rem] font-semi">Toko Tas</h1>
              <h1 className="text-[0.8rem] px-6  w-[95%] overflow-hidden">
                sebuah web penjualan tas online toko Aura & co.
              </h1>
              <a
                href="https://web-tas-h6ax.vercel.app/"
                className="px-4 py-1 dark:bg-kuning bg-t-fonta hover: rounded-md hover:dark:bg-bacg transition duration-500 hover:dark:text-kuning text-black text-[0.9rem] mt-3"
              >
                view Project
              </a>
            </div>
          </div>
          <div className="flex-1  shadow-2xl rounded-2xl dark:bg-f-text transition-colors duration-500">
            <img
              src={tas}
              alt=""
              className="w-full h-35 object-cover rounded-t-2xl bg-center "
            />
            <div className="flex flex-col items-center gap-2 mt-2 text-center mb-3">
              <h1 className="text-[1.1rem] font-semi">Toko Tas</h1>
              <h1 className="text-[0.8rem] px-6  w-[95%] overflow-hidden">
                sebuah web penjualan tas online toko Aura & co.
              </h1>
              <a
                href="https://web-tas-h6ax.vercel.app/"
                className="px-4 py-1 dark:bg-kuning bg-t-fonta hover: rounded-md hover:dark:bg-bacg transition duration-500 hover:dark:text-kuning text-black text-[0.9rem] mt-3"
              >
                view Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myworks;
