import wa from "../assets/files/wat.svg";
import github from "../assets/files/github.svg";
import ig from "../assets/files/ig.svg";
const Footer = () => {
  return (
    <div className="h-40 md:h-60 dark:bg-f-text dark:text-t-fonta flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="dark:text-kuning text-[1.2rem] font-bold font-mono">
          Bileam Mangalla.
        </h1>
        <div className="flex gap-5">
          <a href="">
            {" "}
            <img
              src={ig}
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 object-cover "
            />
          </a>
          <a
            href="https://wa.me/6281242922597?text=Hallo%20bileam"
            target="_blank"
          >
            {" "}
            <img
              src={wa}
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 object-contain "
            />
          </a>
          <a href="https://github.com/bileam" target="_blank">
            <img
              src={github}
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 object-contain "
            />
          </a>
        </div>
        <h1 className="text-[0.8rem]">@bileam 2025</h1>
      </div>
    </div>
  );
};

export default Footer;
