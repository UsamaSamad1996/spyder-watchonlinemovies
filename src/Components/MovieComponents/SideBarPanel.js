import React from "react";
import Fb from "../../Images/facebook.svg";
import Linked from "../../Images/linkedin.svg";
import Youtube from "../../Images/youtube.svg";
import Twitter from "../../Images/twitter.svg";
import Whatsapp from "../../Images/whatsapp.svg";
import { Fade } from "react-awesome-reveal";

const SideBarPanel = ({ movie }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-start  bg-black pt-10 ">
      <div className="wrapper w-[95%] pl-10">
        <Fade cascade="true" duration={2500} damping={0.02} delay={200}>
          <div className="sponsersImages flex  flex-wrap ">
            <div className="facebookc hover:bg-blue-600 rounded-full  flex justify-center items-center  p-2 mr-1 xl:mr-2">
              <a href="https://web.facebook.com/usama.samad.56">
                <img src={Fb} alt="sponser" className="h-6 w-6" />
              </a>
            </div>
            <div className="facebookc hover:bg-[#0A66C2] rounded-xl  flex justify-center items-center p-2 mr-1 xl:mr-2">
              <a href="https://www.linkedin.com/in/usama-abdul-samad-23293a1bb/">
                <img src={Linked} alt="sponser" className="h-6 w-6" />
              </a>
            </div>
            <div className="facebookc hover:bg-[#FF0000] rounded-xl  flex justify-center items-center p-2 mr-1 xl:mr-2">
              <a href="https://www.youtube.com  ">
                <img src={Youtube} alt="sponser" className="h-6 w-6" />
              </a>
            </div>
            <div className="facebookc hover:bg-[#1D9BF0] rounded-full  flex justify-center items-center p-2 mr-1 xl:mr-2">
              <p>
                <img src={Twitter} alt="sponser" className="h-6 w-6" />
              </p>
            </div>
            <div className="facebookc hover:bg-[#1AD03F] rounded-full  flex justify-center items-center p-2 mr-1 xl:mr-2 border-0">
              <a href="https://wa.me/923242119160">
                <img src={Whatsapp} alt="sponser" className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-[#ffffff] mt-8 pl-2">
            <h1 className="text-lg capitalize font-semibold pb-1">
              Original Title
            </h1>
            <p className="text-sm italic truncate">{movie?.original_title}</p>
          </div>

          <div className="text-[#ffffff] mt-8 pl-2">
            <h1 className="text-lg capitalize font-semibold pb-1">Status</h1>
            <p className="text-sm italic">{movie?.status}</p>
          </div>

          <div className="text-[#ffffff] mt-8 pl-2">
            <h1 className="text-lg capitalize font-semibold pb-1">Budget</h1>
            <p className="text-sm italic">
              ${movie?.budget.toLocaleString("en-US")}.00
            </p>
          </div>

          <div className="text-[#ffffff] mt-8 pl-2">
            <h1 className="text-lg capitalize font-semibold pb-1">Revenue</h1>
            <p className="text-sm italic">
              ${movie?.revenue.toLocaleString("en-US")}.00
            </p>
          </div>
          <div className="text-[#ffffff] mt-8 pl-2">
            <h1 className="text-lg capitalize font-semibold pb-1">Country</h1>
            <p className="text-sm italic">
              {movie?.production_countries[0]?.name}
            </p>
            <p className="text-sm italic">
              {movie?.production_countries[1]?.name}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SideBarPanel;
