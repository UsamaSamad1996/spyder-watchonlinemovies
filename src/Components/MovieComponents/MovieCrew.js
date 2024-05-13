import React from "react";
import { Fade } from "react-awesome-reveal";
import { img_300 } from "../../Config";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MovieCrew = ({ movie }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-end bg-[black] py-14 pb-24 snap-start  lg:h-[540px]">
      <div className="wrapper w-[93%] flex flex-col">
        <div className="first">
          <h1 className="text-[#ffffff] text-2xl font-semibold capitalize pb-10">
            Crew Members
          </h1>
        </div>
        <Fade duration={2000} triggerOnce="true" delay={300} direction="left">
          <div className="cast flex overflow-x-scroll gap-5 scrollbar-thin pr-20">
            {movie?.credits?.crew.map((member) =>
              member.profile_path === null ? null : (
                <div
                  key={member.credit_id}
                  className="memberCards flex flex-col bg-[#1f1f1f] text-[#ffffff] rounded-lg w-[10rem]"
                >
                  <img
                    src={`${img_300}/${member?.profile_path}`}
                    alt="member"
                    className="rounded-t-lg h-[13rem]"
                  />
                  <p className="text-base font-semibold mt-3  capitalize px-3 truncate w-[10rem]">
                    {member?.name}
                  </p>
                  <p className="text-sm capitalize  px-3 mt-1 mb-4  truncate w-[10rem]">
                    {member?.job}
                  </p>
                </div>
              )
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MovieCrew;
