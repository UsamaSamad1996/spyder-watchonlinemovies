import React from "react";
import Fb from "../Images/facebook.svg";
import Linked from "../Images/linkedin.svg";
import Youtube from "../Images/youtube.svg";
import Twitter from "../Images/twitter.svg";
import Whatsapp from "../Images/whatsapp.svg";

const Footer = () => {
  ///////////////

  return (
    <footer className="componentContainer flex justify-center bg-black border-t-[1px] border-[#2b2929] snap-start">
      <div className="mainWrapper w-[80%] lg:w-[90%] xl:w-[80%] flex flex-col items-center">
        <div className="secondwrapper w-full   text-4xl flex flex-col lg:flex-row gap-5 justify-center text-whites pt-8 pb-6 ">
          <div className="first mb-5 lg:mb-0  flex flex-col lg:items-center justify-start lg:w-[40%]    border-l-[1px] lg:border-0 lg:px-10 px-7 border-[#2b2929]  ">
            <h1 className=" font-spyder font-bold text-6xl xl:text-7xl text-aqua transition-all duration-200 lg:text-center">
              SPY
              <span className="text-4xl xl:text-4xl text-whites font-bold uppercase">
                Movies
              </span>
            </h1>
            <p className="text-whites text-xs font-semibold leading-5 mt-5 lg:text-center hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae id quia dolorum eligendi eaque quo doloremque eius
              corrupti libero et quidem, soluta quaerat vero accusantium?
              Officia magni dolorem illo architecto.
            </p>
          </div>
          <div className="first mb-5 lg:mb-0   border-l-[1px] border-[#2b2929] font-semibold  lg:pl-8 pl-7 lg:w-[25%]   ">
            <h1 className="uppercase text-lg  pb-5">Company</h1>

            <ul>
              <li
                className="hover:text-aqua py-2 text-base hover:cursor-pointer"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
              >
                Search Movie
              </li>
              <li className="hover:text-aqua py-2 text-base">About Us</li>

              <li className="hover:text-aqua py-2 text-base">Movies</li>
              <li className="hover:text-aqua py-2 text-base">Tv Shows</li>
            </ul>
          </div>

          <div className="first mb-5 lg:mb-0  border-l-[1px] border-[#2b2929] lg:w-[35%]  text-xl  leading-loose flex flex-col items-start lg:pl-7 pl-5 ">
            <h1 className="uppercase text-lg  font-semibold pl-2">
              Contact Us
            </h1>
            <div className="sponsersImages flex py-7 flex-wrap ">
              <div className="facebookc hover:bg-blue-600 rounded-2xl  flex justify-center items-center  p-2 mr-4">
                <a href="https://web.facebook.com/usama.samad.56">
                  <img src={Fb} alt="sponser" className="h-6 w-6" />
                </a>
              </div>
              <div className="facebookc hover:bg-[#0A66C2] rounded-2xl  flex justify-center items-center p-2 mr-4">
                <a href="https://www.linkedin.com/in/usama-abdul-samad-23293a1bb/">
                  <img src={Linked} alt="sponser" className="h-6 w-6" />
                </a>
              </div>
              <div className="facebookc hover:bg-[#FF0000] rounded-2xl  flex justify-center items-center p-2 mr-4">
                <a href="https://www.youtube.com  ">
                  <img src={Youtube} alt="sponser" className="h-6 w-6" />
                </a>
              </div>
              <div className="facebookc hover:bg-[#1AD03F] rounded-2xl  flex justify-center items-center p-2 mr-4 border-0">
                <a href="https://wa.me/923242119160">
                  <img src={Whatsapp} alt="sponser" className="h-6 w-6" />
                </a>
              </div>
              <div className="facebookc hover:bg-[#1D9BF0] rounded-2xl  flex justify-center items-center p-2 mr-4">
                <p>
                  <img src={Twitter} alt="sponser" className="h-6 w-6" />
                </p>
              </div>
            </div>
            <a
              href="https://mail.google.com"
              className=" text-sm text-whites pl-2  font-semibold "
            >
              Email : usama.samad160@gmail.com
            </a>
          </div>
        </div>
        <div className="copyRights border-t-[1px] border-[#2b2929] w-full">
          <p className="text-whites text-sm pt-5 pb-6 opacity-80 text-center">
            Copyright @ 2023 | SPY Universe | Developed By Usama Samad | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
