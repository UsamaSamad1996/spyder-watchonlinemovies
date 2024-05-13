import React from "react";
import { img_300 } from "../../Config";

const TvCrew = ({ tv }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-end bg-[black] py-14 pb-24">
      <div className="wrapper w-[93%] flex flex-col">
        <div className="first">
          <h1 className="text-[#ffffff] text-3xl font-semibold capitalize pb-10">
            Crew Members
          </h1>
        </div>
        <div className="cast flex overflow-x-scroll gap-7 scrollbar-thin">
          {tv?.credits?.crew.map((member) =>
            member.profile_path === null ? (
              ""
            ) : (
              <div
                key={member.credit_id}
                className="memberCards flex flex-col bg-[#1f1f1f] text-[#ffffff] rounded-xl"
              >
                <img
                  src={`${img_300}/${member?.profile_path}`}
                  alt="member"
                  className="rounded-t-xl h-[16rem]"
                />
                <p className="text-xl font-semibold pt-3 w-[12rem] capitalize px-3 truncate">
                  {member?.name}
                </p>
                <p className="text-lg capitalize  px-3 pt-1 pb-4 w-[12rem] truncate">
                  {member?.job}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TvCrew;
