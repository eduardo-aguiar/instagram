import Header2 from "./header-transp";

const HeroImage = ({ ...otherProps }) => {
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

          <div className="mt-72">
            <h1
              className="
                                        relative px-2.5 m-auto text-white uppercase z-10 text-3xl text-center md:text-5xl mb-2 font-mono font-medium
                                        "
            >
              {otherProps.title}
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
