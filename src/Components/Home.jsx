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
            hi i'am bileam web developer
          </h1>
          <p className="dark:text-t-fonta md:text-[1rem] text-[0.8rem]  md:text-start text-justify  w-[90%]">
            Hallo.. Nama saya bileam mangalla, saya lahir di toraja
            09-januari-2003, jika di jumlahkan sekarang umur saya 22 Tahun, saya
            lulusan S1 Teknik Informatika di Universitas Kristen Satya Wacana,
            fakultas Teknologi Informasi. sekarang saya berdomisi salatiga.
            Terimakasih
          </p>
          <div className="flex gap-2  ">
            <button className="bg-kuning  cursor-pointer px-4 py-1 md:px-7 md:py-1 rounded-lg shadow-2xl dark:text-black  ">
              Hare me
            </button>
            <a
              href="/CV-Bileam_Mangalla.pdf"
              download
              className="dark:border-kuning cursor-pointer  border-2 dark:text-kuning  px-2 py-1 rounded-lg shadow-2xl "
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
