import React from "react";
import { img_500 } from "../../Config";
import { PlayCircleFilledOutlined } from "@material-ui/icons";
import { PlaylistPlay } from "@material-ui/icons";
import { Fade } from "react-awesome-reveal";
import "./progress.css";
import Dog from "../../Images/spider.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MovieBanner = ({ movie }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // const { data } = useFetch(
  //   `https://api.themoviedb.org/3/movie/${id}?api_key=f73457624c316e91797e44cd04937419&language=en-US&append_to_response=videos,credits,details`
  // );

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      style={{
        backgroundImage: `url(${img_500}/${movie?.backdrop_path})`,
      }}
      className="Banner  bg-no-repeat bg-cover bg-center">
      <div className="maindiv w-full flex justify-center items-center py-10 lg:py-12  bg-opacity-80 bg-[#2a0b0b] ">
        <div className="wrapper lg:w-[90%] flex flex-col lg:flex-row items-center lg:gap-8  xl:gap-10 ">
          <figure className=" w-[85%] lg:w-[30%] ">
            <h1 className="text-3xl  text-whites font-extrabold  flex mb-6 leading-tight  lg:hidden  px-1 ">{movie?.title}</h1>
            <Fade direction="down" delay={300} duration={2000} triggerOnce="true">
              <img className="h-[33rem] lg:h-[28rem] xl:h-[33rem] rounded-xl" src={movie?.poster_path === null ? Dog : `${img_500}/${movie?.poster_path}`} alt="poster" />
            </Fade>
          </figure>
          <main className="w-[83%] lg:w-[70%]">
            <Fade cascade="true" duration={2500} damping={0.02}>
              {/* MOVIE TITLE */}
              <section className="hidden lg:block">
                <h1 className="lg:text-3xl xl:text-[2.2rem] text-[#ffffff] font-extrabold  flex  pb-4 leading-tight truncate">{movie?.title}</h1>
              </section>

              {/* MOVIE RELEASED DATE */}
              <section className="flex text-[#ffffff] items-center mt-10 lg:mt-0">
                <p className="p-1  border-[1px] border-[#ffffff] font-semibold text-sm">{movie?.production_countries[0]?.iso_3166_1}</p>
                <p className="text-sm pl-3 xl:pl-4 font-semibold lg:font-normal">{movie?.status}</p>
                <p className="text-sm pl-3 xl:pl-4 hidden md:block ">*</p>
                <p className="text-sm pl-3 xl:pl-4 md:hidden font-semibold">-</p>
                <p className="text-sm pl-3 xl:pl-4 font-semibold lg:font-normal">{movie?.release_date}</p>
                <p className="text-sm pl-3 xl:pl-4 hidden md:block">*</p>
                <p className="text-sm pl-3 xl:pl-4 hidden md:block">{movie?.genres[0]?.name}</p>
                <p className="text-sm pl-3 hidden md:block">{movie?.genres[1]?.name}</p>
                <p className="text-sm pl-3 hidden md:block">{movie?.genres[2]?.name}</p>
                <p className="text-sm pl-3 hidden md:block">{movie?.genres[3]?.name}</p>
                <p className="text-sm pl-3 xl:pl-4 hidden md:block">*</p>
                <p className="text-sm pl-3 xl:pl-4 font-semibold lg:font-normal hidden md:block">{movie?.runtime} Mins</p>
              </section>
              {/* Mobile Genres */}
              <section className="flex flex-col gap-5 text-[#ffffff]  mt-5 lg:mt-0 md:hidden">
                <div className="runtime w-full flex">
                  <p className="text-sm font-semibold">Runtime</p> <p className="text-sm px-3 font-semibold">-</p>
                  <p className="text-sm  font-semibold">{movie?.runtime} Mins</p>
                </div>
                <div className="genres w-full flex">
                  <p className="text-sm font-semibold">Genre</p>
                  <p className="text-sm pl-3 font-semibold">-</p>
                  <p className="text-sm pl-3 font-semibold">{movie?.genres[0]?.name}</p>
                  <p className="text-sm pl-3 font-semibold">{movie?.genres[1]?.name}</p>
                  <p className="text-sm pl-3 font-semibold">{movie?.genres[2]?.name}</p>
                  <p className="text-sm pl-3 font-semibold">{movie?.genres[3]?.name}</p>
                </div>
              </section>

              {/* TEASER & TRAILER */}
              <section className="lg:mb-5 my-6 lg:mt-6 flex items-center text-[#ffffff]  lg:gap-8">
                {/* Public Ratings */}
                <div className="flex items-center">
                  <CircularProgressbar
                    className="w-[4rem] h-[4rem] xl:w-[4.5rem] xl:h-[4.5rem] text-center flex justify-center items-center bg-black  rounded-full p-1 border-4 border-[#ffffff]"
                    value={Math.round(movie?.vote_average * 10)}
                    text={`${Math.round(movie?.vote_average * 10)}%`}
                    strokeWidth={10}
                    backgroundPadding={6}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathTransitionDuration: 3,
                      backgroundColor: "black",
                      textColor: "#ffffff",
                      pathColor: "#f50f0f",
                      trailColor: "transparent",
                      textSize: "22px",
                    })}></CircularProgressbar>
                  <p className="ml-3 font-semibold text-sm lg:text-base flex flex-wrap">Public Rating</p>
                </div>
                {/* Trailer */}
                <div className="ml-2 lg:ml-0">
                  {movie?.videos?.results
                    .filter((video) => (video.type === "Trailer" && video.name.includes("Trailer")) || video.name.includes("Official Trailer"))
                    .reverse()
                    .map((video, i) =>
                      i === 0 ? (
                        <div
                          className=" flex items-center text-lg font-semibold transform transition-all duration-150 hover:scale-110 hover:text-[#f50f0f] hover:bg-[#ffffff] px-2 lg:px-4 py-2 rounded-2xl hover:cursor-pointer "
                          key={video.id}>
                          <a className="flex items-center" href={`https://www.youtube.com/watch?v=${video.key}`}>
                            <PlayCircleFilledOutlined style={{ fontSize: "50px" }} className="border-4 border-[#ffffff] rounded-full  " /> <p className="pl-3 text-sm lg:text-base">Watch Trailer</p>
                          </a>{" "}
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
                {/* Teaser */}
                <div className="hidden lg:block">
                  {movie?.videos?.results
                    .filter((video) => (video.type === "Teaser" && video.name.includes("Teaser")) || video.name.includes(" teaser"))
                    .reverse()
                    .map((video, i) =>
                      i === 0 ? (
                        <div
                          className=" flex items-center text-lg font-semibold transform transition-all duration-150 hover:scale-110 hover:text-[#f50f0f] hover:bg-[#ffffff] px-4 py-2 rounded-2xl hover:cursor-pointer "
                          key={video.id}>
                          <a href={`https://www.youtube.com/watch?v=${video.key}`}>
                            <PlaylistPlay style={{ fontSize: "50px" }} />
                            <span className="text-base">Watch Teaser</span>
                          </a>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
              </section>
              {/* Tagline & Overview */}
              <section className="flex flex-col">
                <p className="text-[#ffffff] text-lg xl:text-lg italic opacity-70 ">{movie?.tagline}</p>
                <h1 className="font-bold text-xl xl:text-2xl text-[#ffffff] lg:mt-4 mt-6">Overview</h1>
                <p className="text-sm xl:text-base flex flex-wrap  text-[#ffffff] mt-2 italic ">{movie?.overview}</p>
              </section>

              {/* PRODUCER & DIRECTOR */}
              <section className="text-[#ffffff] gap-8 lg:gap-20 xl:gap-36 flex flex-col lg:flex-row mt-6 ">
                {/* Director */}
                <div>
                  {movie?.credits.crew
                    .filter((person) => person.job === "Director")
                    .slice(0, 2)
                    .map((person, index) => (
                      <div key={index} className="row ">
                        <h1 className="font-bold text-lg xl:text-xl pb-1">{index === 0 ? "Director" : null}</h1>
                        <p key={person.credit_id} className="text-sm xl:text-base italic">
                          {person.name}
                        </p>
                      </div>
                    ))}
                </div>
                {/* Producer */}
                <div>
                  {movie?.credits.crew
                    .filter((person) => person.job === "Producer")
                    .slice(0, 2)
                    .map((person, index) => (
                      <div key={index} className="row">
                        <h1 className="font-bold text-lg xl:text-xl pb-1">{index === 0 ? "Producer" : null}</h1>
                        <p key={person.credit_id} className="text-sm xl:text-base italic">
                          {person.name}
                        </p>
                      </div>
                    ))}
                </div>
                {/* ScreenPlay */}
                <div>
                  {movie?.credits.crew
                    .filter((person) => person.job === "Screenplay")
                    .slice(0, 2)
                    .map((person, index) => (
                      <div key={index} className="row ">
                        <h1 className="font-bold text-lg xl:text-xl pb-1">{index === 0 ? "Screenplay" : null}</h1>
                        <p key={person.credit_id} className="text-sm xl:text-base italic">
                          {person.name}
                        </p>
                      </div>
                    ))}
                </div>
              </section>
            </Fade>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
