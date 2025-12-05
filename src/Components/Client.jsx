import Zoom_in from "./Animasi/Zoom_in";

const Client = () => {
  return (
    <div className="md:container pt-25 md:pt-25 font-sans   mx-auto dark:text-t-fonta  px-5 lg:px-10 flex   min-h-200 md:min-h-auto  ">
      <div className="flex flex-col w-full gap-5">
        <div className="w-full flex justify-between">
          <h1 className="text-[1.2rem]">My Clients</h1>
          <a
            href="#"
            className="text-[0.9rem] border-b-2 md:border-b-0 dark:text-kuning"
          >
            See All
          </a>
        </div>
        <div className=" w-full mt-5 flex flex-col  transition-all duration-700">
          <Zoom_in>
            <div className="dark:bg-f-text rounded-2xl flex flex-col items-center py-6 gap-2">
              <img
                src=""
                alt=""
                className="w-30 border rounded-full h-30 object-cover bg-center"
              />
              <h1>Zaini</h1>
              <p className="max-w-[80%]  overflow-hidden max-h-30 text-center">
                pengerjaanya keren bangat terimakasih Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere consequatur, placeat
                quibusdam eum quod aspernatur voluptatem omnis in eius, labore
                cumque officiis aperiam! Asperiores, sapiente sed cumque
                deserunt ipsa nisi!
              </p>
            </div>
          </Zoom_in>
        </div>
      </div>
    </div>
  );
};

export default Client;
