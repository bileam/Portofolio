import { Friend } from "../../dataArray/Friend";
const Frends = () => {
  return (
    <div className="flex  md:flex-row flex-col items-center  md:justify-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-[100px] ">
        {Friend.slice(-9).map((item, index) => (
          <div
            key={index}
            style={{ gridRow: `span ${item.row}` }}
            className="overflow-hidden hover:scale-95 duration-500 transition-all"
          >
            <img
              src={item.gambar}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frends;
