import React from "react";
import { img_300 } from "../../Config";

const TvCast = ({ tv }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-end  bg-black py-14 ">
      <div className="wrapper w-[93%] flex flex-col">
        <div className="first">
          <h1 className="text-[#ffffff] text-3xl font-semibold capitalize pb-10">
            Top Billed Cast
          </h1>
        </div>
        <div className="cast flex overflow-x-scroll gap-7 scrollbar-thin">
          {tv?.credits?.cast.map((actor) =>
            actor.profile_path === null ? (
              ""
            ) : (
              <div
                key={actor.id}
                className="actorCards flex flex-col bg-[#1f1f1f] text-[#ffffff] rounded-xl"
              >
                <img
                  src={`${img_300}/${actor?.profile_path}`}
                  alt="actor"
                  className="rounded-t-xl h-[16rem]"
                />
                <p className="text-xl font-semibold pt-3 w-[12rem] capitalize px-3 truncate">
                  {actor?.name}
                </p>
                <p className="text-lg capitalize  px-3 pt-1 pb-4 w-[12rem] truncate">
                  {actor?.character}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TvCast;
