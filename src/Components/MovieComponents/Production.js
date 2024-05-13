import React from "react";
import { Fade } from "react-awesome-reveal";
import { img_300 } from "../../Config";

const Production = ({ movie }) => {
  return (
    <div className="flex items-center justify-center bg-[black] py-14 pb-28 lg:h-[540px]">
      <div className="wrapper w-[89%] ">
        <h1 className="text-[#ffffff] text-2xl font-semibold capitalize pb-10">
          Movie Production
        </h1>
        <Fade cascade="true" duration={3000} damping={0.02}>
          <div className="flex gap-16 pt-5  flex-wrap justify-center lg:justify-start">
            {movie?.production_companies.map((prod) =>
              prod.logo_path === null ? null : (
                <div
                  key={prod.id}
                  className="card  text-[#ffffff]  w-[13rem] flex flex-col "
                >
                  <div className=" flex justify-center items-center ">
                    <img
                      src={`${img_300}/${prod.logo_path}`}
                      alt="Sponsers"
                      className=" max-h-36 bg-white p-2 h-auto"
                    />
                  </div>
                  <div className="flex justify-center items-end flex-auto mt-5">
                    <h1 className="text-sm px-2 font-bold uppercase">
                      {prod.name}
                    </h1>
                  </div>
                </div>
              )
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Production;
