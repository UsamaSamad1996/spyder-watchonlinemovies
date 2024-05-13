import React from "react";
import { img_500 } from "../../Config";

const TvVideos = ({ tv }) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(tv);
  return (
    <div
      style={{
        backgroundImage: `url(${img_500}/${tv?.backdrop_path})`,
      }}
      className="Banner  bg-no-repeat bg-cover bg-center bg-[#2a0b0b]"
    >
      <div className="flex items-center justify-center bg-opacity-50   bg-[#2a0b0b] py-14 h-[40rem]">
        <div className="wrapper w-[89%] flex flex-col ">
          <div className="first">
            <h1 className="text-[#ffffff] text-3xl font-semibold capitalize pb-10">
              {tv?.videos.results.length > 0
                ? "Video Clips "
                : "No Videos Available"}
            </h1>
          </div>
          <div className="cast flex overflow-x-scroll gap-20 scrollbar-thin ">
            {tv?.videos?.results
              .map((video) => video)
              .reverse()
              .map((video) => (
                <div key={video.id} className="videoCards flex flex-col">
                  <iframe
                    title={video.name}
                    width="500px"
                    height="350px"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allow="autoplay"
                    allowFullScreen={true}
                  ></iframe>

                  <h1 className=" py-4 text-2xl capitalize text-center text-[#ffffff] w-[470px] font-semibold">
                    {video.name}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvVideos;
