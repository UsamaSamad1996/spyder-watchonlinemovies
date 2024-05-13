import React from "react";
import { Fade } from "react-awesome-reveal";
import { img_500 } from "../../Config";
import useMediaQuery from "../useMediaQuery";

const MovieClips = ({ movie }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const mobile = useMediaQuery("(max-width: 450px)");

  return (
    <Fade duration={1500}>
      <div
        style={{
          backgroundImage: `url(${img_500}/${
            movie?.belongs_to_collection === null
              ? movie?.backdrop_path
              : movie?.belongs_to_collection.backdrop_path
          })`,
        }}
        className="videos  bg-no-repeat bg-cover bg-center bg-[#2a0b0b]"
      >
        <div className="flex items-center justify-center bg-opacity-70   bg-[#2a0b0b] h-[27rem] lg:h-[540px]">
          <div className="wrapper w-[90%] flex flex-col ">
            <div className="first">
              <h1 className="text-[#ffffff] text-xl lg:text-2xl font-semibold capitalize pb-10">
                {movie?.videos.results.length > 0
                  ? `Videos  ${
                      movie?.belongs_to_collection?.name
                        ? `- ${movie?.belongs_to_collection?.name}`
                        : ""
                    }`
                  : ""}
              </h1>
            </div>
            <Fade
              duration={2000}
              triggerOnce="true"
              delay={300}
              direction="left"
            >
              <div className="cast flex overflow-x-scroll lg:gap-20 gap-4 scrollbar-thin ">
                {movie?.videos?.results
                  .map((video) => video)
                  .reverse()
                  .map((video) => (
                    <div key={video.id} className="videoCards flex flex-col">
                      <iframe
                        title={video.name}
                        width={mobile ? "300px" : "400px"}
                        height={mobile ? "200px" : "250px"}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allow="autoplay"
                        allowFullScreen={true}
                      ></iframe>

                      <h1 className=" py-4 text-lg capitalize text-center text-[#ffffff] font-semibold">
                        {video.name}
                      </h1>
                    </div>
                  ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MovieClips;
