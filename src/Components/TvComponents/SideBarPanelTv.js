import React from "react";
import Fb from "../../Images/facebook.svg";
import Linked from "../../Images/linkedin.svg";
import Youtube from "../../Images/youtube.svg";
import Twitter from "../../Images/twitter.svg";
import Whatsapp from "../../Images/whatsapp.svg";

const SideBarPanelTv = ({ tv }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-start  bg-black pt-10 ">
      <div className="wrapper w-[95%] pl-10">
        <div className="sponsersImages flex  flex-wrap ">
          <div className="facebookc hover:bg-blue-600 rounded-2xl  flex justify-center items-center  p-2 mr-2">
            <a href="https://web.facebook.com/usama.samad.56">
              <img src={Fb} alt="sponser" className="xl:h-8 xl:w-8  h-8 w-8" />
            </a>
          </div>
          <div className="facebookc hover:bg-[#0A66C2] rounded-2xl  flex justify-center items-center p-2 mr-2">
            <a href="https://www.linkedin.com/in/usama-abdul-samad-23293a1bb/">
              <img
                src={Linked}
                alt="sponser"
                className="xl:h-8 xl:w-8  h-8 w-8"
              />
            </a>
          </div>
          <div className="facebookc hover:bg-[#FF0000] rounded-2xl  flex justify-center items-center p-2 mr-2">
            <a href="https://www.youtube.com  ">
              <img
                src={Youtube}
                alt="sponser"
                className="xl:h-8 xl:w-8  h-8 w-8"
              />
            </a>
          </div>
          <div className="facebookc hover:bg-[#1D9BF0] rounded-2xl  flex justify-center items-center p-2 mr-2">
            <p>
              <img
                src={Twitter}
                alt="sponser"
                className="xl:h-8 xl:w-8  h-8 w-8"
              />
            </p>
          </div>
          <div className="facebookc hover:bg-[#1AD03F] rounded-2xl  flex justify-center items-center p-2 mr-2 border-0">
            <a href="https://wa.me/923242119160">
              <img
                src={Whatsapp}
                alt="sponser"
                className="xl:h-8 xl:w-8  h-8 w-8"
              />
            </a>
          </div>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">
            Original Title
          </h1>
          <p className="text-xl">{tv?.original_name}</p>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">Status</h1>
          <p className="text-xl">{tv?.status}</p>
        </div>{" "}
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">Start</h1>
          <p className="text-xl">Date: {tv?.first_air_date}</p>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">End</h1>
          <p className="text-xl">Date: {tv?.last_air_date}</p>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">
            No Of Episodes
          </h1>
          <p className="text-xl">Total : {tv?.number_of_episodes}</p>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">
            No Of Seasons
          </h1>
          <p className="text-xl">Total : {tv?.number_of_seasons}</p>
        </div>
        <div className="text-[#ffffff] mt-10 pl-2">
          <h1 className="text-xl uppercase font-semibold pb-1">Country</h1>
          <p className="text-xl">
            {tv?.production_countries.map((country) => country?.name)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBarPanelTv;
