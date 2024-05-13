import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./Search";
import spyderCover from "../Images/spider-cover.png";

const Layout = ({ children }) => {
  ////

  return (
    <div>
      <section
        // style={{
        //   backgroundImage: `url(${spyderCover})`,
        // }}
        className=" w-full bg-black bg-no-repeat bg-[length:400px_460px] bg-bottom">
        <div className="maindiv w-full h-full flex-col flex ">
          <Navbar />
          <Search />
          {/* <div className="h-full w-full border-2 flex items-center justify-center ">
            <h1
              className="text-black font-extrabold text-[9rem] font-serif"
              style={{
                textShadow:
                  " #ffffff 15px 15px 50px,  #ffffff -15px -15px 50px, #03FCF5 20px 20px 55px, #03FCF5 -20px -20px 55px, #091A3F -50px -50px 75px, #091A3F 50px 50px 75px, #091A3F 70px 70px 85px, #091A3F -70px -70px 85px",
              }}
            >
              SPYDER
            </h1>
          </div> */}
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
