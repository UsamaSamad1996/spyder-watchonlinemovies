import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBarPanelTv from "../../Components/TvComponents/SideBarPanelTv";
import TvBanner from "../../Components/TvComponents/TvBanner";
import TvCast from "../../Components/TvComponents/TvCast";
import TvCrew from "../../Components/TvComponents/TvCrew";
import TvVideos from "../../Components/TvComponents/TvVideos";
import useFetch from "../../Components/useFetch";

const TvDetails = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { id } = useParams();

  const { data } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=f73457624c316e91797e44cd04937419&language=en-US&append_to_response=videos,credits,details,images`
  );

  // console.log(data);

  useEffect(() => {
    window.scroll(0, 193);
  }, []);
  return (
    <div className="bg-black">
      <TvBanner tv={data} />
      <div className=" maindiv flex ">
        <div className="left w-[74%] ">
          <TvCast tv={data} />
          <TvCrew tv={data} />
        </div>
        <div
          style={{
            boxShadow: "-30px 0px 20px -15px black",
          }}
          className="right  w-[26%]"
        >
          <SideBarPanelTv tv={data} />
        </div>
      </div>
      <div className="videos">
        <TvVideos tv={data} />
        {/* <Production movie={data} /> */}
      </div>
    </div>
  );
};

export default TvDetails;
