import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieBanner from "../../Components/MovieComponents/MovieBanner";
import MovieCast from "../../Components/MovieComponents/MovieCast";
import MovieClips from "../../Components/MovieComponents/MovieClips";
import MovieCrew from "../../Components/MovieComponents/MovieCrew";
import Production from "../../Components/MovieComponents/Production";
import SideBarPanel from "../../Components/MovieComponents/SideBarPanel";
// import useFetch from "../../Components/useFetch";
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import useMediaQuery from "../../Components/useMediaQuery";
import Layout from "../../LayoutComponents/Layout";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MovieDetails = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const mobile = useMediaQuery("(max-width: 450px)");

  const { id } = useParams();

  // const { data?.data, isFetching } = useFetch(
  //   `https://api.themoviedb.org/3/movie/${id}?api_key=f73457624c316e91797e44cd04937419&language=en-US&append_to_response=videos,credits,details,images`
  // );

  const { data, isFetching, isLoading, isError, error } = useQuery(
    ["movie-details", id],
    () =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f73457624c316e91797e44cd04937419&language=en-US&append_to_response=videos,credits,details,images`
      ),
    { refetchOnMount: true, refetchOnWindowFocus: true }
  );

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray flex  items-center justify-center h-[100vh]">
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 h-[100vh] flex items-start justify-center">
          <CircularProgress size={mobile ? "200px" : "400px"} color="error" />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="bg-gray flex  items-center justify-center">
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 h-[100vh] flex items-start justify-center">
          <h1 className="text-5xl text-whites">{error.message}</h1>
        </div>
      </div>
    );
  }
  if (isFetching) {
    return (
      <div className="bg-gray flex  items-center justify-center h-[100vh]">
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 h-[100vh] flex items-start justify-center">
          <CircularProgress size={mobile ? "200px" : "400px"} color="error" />
        </div>
      </div>
    );
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex justify-center bg-red">
      <div className="bg-black snap-y snap-mandatory scroll-smooth overflow-y-auto scrollbar-none h-screen max-w-[1450px] ">
        <Layout>
          <div className="banner snap-start">
            <MovieBanner movie={data?.data} />
          </div>

          <div className=" maindiv flex  snap-start">
            <div className="left w-full lg:w-[70%] xl:w-[75%] ">
              <MovieCast movie={data?.data} />
              <MovieCrew movie={data?.data} />
            </div>
            <div className="hidden lg:block w-[30%] xl:w-[25%] shadow-[-40px_0px_20px_-15px_black]">
              <SideBarPanel movie={data?.data} />
            </div>
          </div>

          <div className="videos snap-start">
            <MovieClips movie={data?.data} />
          </div>
          <div className="snap-start">
            <Production movie={data?.data} />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default MovieDetails;
