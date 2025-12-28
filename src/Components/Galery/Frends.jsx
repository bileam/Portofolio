import { useEffect, useState } from "react";
import { Friend } from "../../dataArray/Friend";
import Zoom_in from "../Animasi/Zoom_in";
const Frends = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(Friend.slice(-9));
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="flex  md:flex-row flex-col items-center  md:justify-center">
      <Zoom_in className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-[100px] w-full">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ gridRow: `span ${item.row}` }}
            className="overflow-hidden hover:scale-95 duration-500 transition-all w-full border "
          >
            <img
              src={item.gambar}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Zoom_in>
    </div>
  );
};

export default Frends;
