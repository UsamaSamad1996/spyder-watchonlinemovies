import React from "react";
import { img_500 } from "../../Config";
import { PlayCircleFilledOutlined } from "@material-ui/icons";
import { PlaylistPlay } from "@material-ui/icons";
import { Bounce, Fade } from "react-awesome-reveal";
import "../MovieComponents/progress.css";
import Dog from "../../Images/spider.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TvBanner = ({ tv }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // console.log(tv);
  return (
    <div className="bg-[#212020] ">
      {" "}
      <div
        style={{
          backgroundImage: `url(${img_500}/${tv?.backdrop_path})`,
        }}
        className="Banner  bg-no-repeat bg-cover bg-center "
      >
        <div className="maindiv w-full flex justify-center items-center  py-20  bg-opacity-80   bg-[#2a0b0b] ">
          <div className="wrapper w-[90%] flex justify-center  gap-12 ">
            <div className="image relative ">
              <Bounce
                direction="down"
                delay={1000}
                duration={5000}
                triggerOnce="true"
              >
                <img
                  className="h-[39rem] rounded-xl"
                  src={
                    tv?.poster_path === null
                      ? Dog
                      : `${img_500}/${tv?.poster_path}`
                  }
                  alt="poster"
                />
              </Bounce>
            </div>
            <div className="data xl:w-[70rem] lg:w-[50rem] ">
              {/* tv TITLE */}
              <Fade
                cascade
                damping={0.09}
                duration={1000}
                delay={500}
                triggerOnce="true"
              >
                <div>
                  <h1 className="lg:text-4xl xl:text-5xl text-[#ffffff] font-extrabold  flex mt-2 xl:pb-6 lg:pb-3 pt-1 leading-tight truncate">
                    {tv?.name}
                  </h1>
                </div>
                <div className="flex text-[#ffffff] items-center ">
                  <p className="p-1  border-[1px] border-white font-semibold">
                    {tv?.production_countries[0]?.iso_3166_1}
                  </p>
                  <p className="pl-4"> {tv?.status} </p>
                  <p className="pl-4"> * </p>
                  <p className="pl-4">
                    No of Episodes - {tv?.number_of_episodes}
                  </p>
                  <p className="pl-4"> * </p>
                  <p className="pl-4"> {tv?.genres[0]?.name}</p>
                  <p className="pl-2"> {tv?.genres[1]?.name}</p>
                  <p className="pl-2"> {tv?.genres[2]?.name}</p>
                  <p className="pl-2"> {tv?.genres[3]?.name}</p>
                </div>
                {/* TEASER & TRAILER */}
                <div className="xl:my-8 lg:my-6 flex items-center text-[#ffffff] gap-14">
                  {/* Public Ratings */}
                  <div className="flex items-center pr-5">
                    <CircularProgressbar
                      className="w-[6rem] h-[6rem] text-center flex justify-center items-center bg-black  rounded-full p-1 border-4 border-[#ffffff]"
                      value={Math.floor(tv?.vote_average * 10)}
                      text={`${Math.round(tv?.vote_average * 10)}%`}
                      strokeWidth={10}
                      backgroundPadding={6}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathTransitionDuration: 3,
                        backgroundColor: "black",
                        textColor: "#ffffff",
                        pathColor: "#f50f0f",
                        trailColor: "transparent",
                        textSize: "23px",
                      })}
                    ></CircularProgressbar>
                    <p className="pl-4 font-semibold text-xl">
                      Public <br /> Rating
                    </p>
                  </div>
                  {/* Trailer */}
                  {tv?.videos?.results
                    .filter(
                      (video) =>
                        (video.type === "Trailer" &&
                          video.name.includes("Trailer")) ||
                        video.name.includes("Official Trailer")
                    )
                    .reverse()
                    .map((video, i) =>
                      i === 0 ? (
                        <div
                          className=" flex items-center text-xl font-semibold transform transition-all duration-150 hover:scale-110 hover:text-[#f50f0f] hover:bg-[#ffffff] px-4 py-2 rounded-2xl hover:cursor-pointer "
                          key={video.id}
                        >
                          <a
                            href={`https://www.youtube.com/watch?v=${video.key}`}
                          >
                            <PlayCircleFilledOutlined
                              style={{ fontSize: "65px" }}
                              className="border-4 border-[#ffffff] rounded-full  "
                            />{" "}
                            <span className="pl-2">Watch Trailer</span>
                          </a>{" "}
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  {/* Teaser */}
                  {tv?.videos?.results
                    .filter(
                      (video) =>
                        (video.type === "Teaser" &&
                          video.name.includes("Teaser")) ||
                        video.name.includes(" teaser")
                    )
                    .reverse()
                    .map((video, i) =>
                      i === 0 ? (
                        <div
                          className=" flex items-center text-xl font-semibold transform transition-all duration-150 hover:scale-125 hover:text-[#f50f0f] hover:bg-[#ffffff] px-4 py-2 rounded-2xl hover:cursor-pointer "
                          key={video.id}
                        >
                          {" "}
                          <a
                            href={`https://www.youtube.com/watch?v=${video.key}`}
                          >
                            <PlaylistPlay style={{ fontSize: "65px" }} />
                            <span>Watch Teaser</span>
                          </a>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
                {/* Tagline & Overview */}
                <div className="flex flex-col">
                  {/* <Bounce top cascade delay={2000} duration={2000}> */}
                  <p className="text-[#ffffff] text-2xl italic opacity-70 ">
                    {tv?.tagline}
                  </p>
                  {/* </Bounce> */}
                  <h1 className="font-bold text-3xl text-[#ffffff] xl:mt-7 lg:mt-6">
                    Overview
                  </h1>
                  <p className="text-[1.2rem] flex flex-wrap  text-[#ffffff] mt-2 italic ">
                    {tv?.overview}
                  </p>
                </div>
                {/* PRODUCER & DIRECTOR */}
                <div className=" flex xl:gap-32 lg:gap-24  xl:mt-8 lg:mt-6">
                  {/* Producer */}
                  {tv?.credits.crew
                    .filter((video) => video.job === "Producer")
                    .map((person, index) => (
                      <div key={person.credit_id} className="text-[#ffffff]">
                        <h1 className="font-bold text-2xl pb-1">
                          {index === 0 ? person.job : ""}
                        </h1>
                        <p className="text-lg">
                          {index === 0 ? person.name : ""}
                        </p>
                        <p className="text-lg">
                          {index === 1 ? person.name : ""}
                        </p>
                      </div>
                    ))}

                  {/* Director */}
                  <div className="text-[#ffffff]">
                    <h1 className="font-bold text-2xl pb-1">Director</h1>
                    {tv?.credits.crew
                      .filter((video) => video.job === "Director")
                      .slice(0, 2)
                      .map((video) => (
                        <p key={video.credit_id} className="text-lg">
                          {video.name}
                        </p>
                      ))}
                  </div>
                  {/* ScreenPlay */}
                  <div className="text-[#ffffff]">
                    <h1 className="font-bold text-2xl pb-1">Writer</h1>
                    {tv?.credits.crew
                      .filter((video) => video.job === "Writer")
                      .slice(0, 2)
                      .map((video) => (
                        <p key={video.credit_id} className="text-lg">
                          {video.name}
                        </p>
                      ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvBanner;
