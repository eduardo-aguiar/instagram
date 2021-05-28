import Header2 from "./header-transp";

const HeroImage = () => {
  return (
    <div className=" bg-gray-100 font-body h-full">
      <div className=" flex flex-col" style={{ height: "512px" }}>
        <div
          className="
                        relative h-full
                        bg-cover bg-center bg-fixed bg-no-repeat z-10 
                        "
          style={{
            backgroundImage: `url(./hero.jpg)`,
          }}
        >
          <Header2 />

          <div className="mt-56">
            <h1
              className="
                                        relative px-2.5 m-auto text-white uppercase z-10 text-3xl text-center md:text-5xl mb-3 font-poppins font-medium opacity-80
                                        "
            >
              Entre em contato
            </h1>
          </div>

          {/*Background color back with opacity */}
          <div
            className="
                                    z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-50 
                                    "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
