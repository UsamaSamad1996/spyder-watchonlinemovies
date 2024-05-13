import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { img_300 } from "../Config";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import Spyder from "../Images/alter.jpg";
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import Layout from "../LayoutComponents/Layout";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TrendingMovies = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [page, setPage] = useState(1);

  // const { data: trending } = useFetch(
  //   `https://api.themoviedb.org/3/trending/all/day?api_key=f73457624c316e91797e44cd04937419&page=${page}`
  // );

  const {
    data: trending,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["trending-movies", page],
    () =>
      axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f73457624c316e91797e44cd04937419&page=${page}`
      ),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );

  // console.log(trending);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [trending]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (isLoading) {
    return (
      <div className="bg-gray flex  items-center justify-center">
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 h-[100vh] flex items-start justify-center">
          <h1 className="text-5xl text-whites">
            <CircularProgress size="400px" color="error" />
          </h1>
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
  // if (isFetching) {
  //   return (
  //     <div className="bg-gray flex  items-center justify-center">
  //       <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 h-[100vh] flex items-start justify-center">
  //         <h1 className="text-5xl text-whites">
  //           <CircularProgress size="400px" color="error" />
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Layout>
      <div className="bg-gray flex  items-center justify-center">
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="HomePage w-[90%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 ">
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex  pt-7 pb-4 md:pb-7  w-full justify-center lg:justify-between ">
            <h1 className=" text-whites text-3xl font-bold tracking-wider font-spyder xl:pl-2">
              Trending Media
            </h1>
            <h1 className=" text-whites text-2xl font-bold tracking-wider  xl:pr-2">
              Page : {page}
            </h1>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="trending flex flex-wrap lg:gap-8 gap-2 justify-center py-5  ">
            {trending?.data?.results.map((movie) =>
              movie.media_type === "movie" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl lg:w-[13rem] w-[11rem]   border-black border-b-2"
                  key={movie.id}
                >
                  <Link
                    className="no-underline"
                    to={`/movieDetails/${movie.id}`}
                  >
                    <img
                      className=" rounded-t-xl lg:h-[20rem] lg:w-[13rem]"
                      src={
                        movie.poster_path === null &&
                        movie.backdrop_path === null
                          ? Spyder
                          : movie.poster_path === null
                          ? `${img_300}/${movie.backdrop_path}`
                          : `${img_300}/${movie.poster_path}`
                      }
                      alt="no poster"
                    />

                    <h1 className="capitalize text-base  p-3   font-semibold lg:w-[13rem] w-[11rem]  truncate">
                      {movie.title}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 lg:w-[13rem] w-[11rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : movie.media_type === "tv" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl lg:w-[13rem] w-[11rem]   border-black border-b-2"
                  key={movie.id}
                >
                  <Link className="no-underline" to={`/tvDetails/${movie.id}`}>
                    <img
                      className=" rounded-t-xl lg:h-[20rem] lg:w-[13rem]"
                      src={
                        movie.poster_path === null &&
                        movie.backdrop_path === null
                          ? Spyder
                          : movie.poster_path === null
                          ? `${img_300}/${movie.backdrop_path}`
                          : `${img_300}/${movie.poster_path}`
                      }
                      alt="no poster"
                    />

                    <h1 className="capitalize text-base  p-3   font-semibold lg:w-[13rem] w-[11rem]  truncate">
                      {movie.name}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 lg:w-[13rem] w-[11rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : movie.media_type === "person" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl lg:w-[13rem] w-[11rem]   border-black border-b-2"
                  key={movie.id}
                >
                  <Link
                    className="no-underline"
                    to={`/personDetails/${movie.id}`}
                  >
                    <img
                      className=" rounded-t-xl lg:h-[20rem] lg:w-[13rem]"
                      src={
                        movie.profile_path === null
                          ? Spyder
                          : `${img_300}/${movie.profile_path}`
                      }
                      alt="no poster"
                    />

                    <h1 className="capitalize text-base  p-3   font-semibold lg:w-[13rem] w-[11rem]  truncate">
                      {movie.name}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 lg:w-[13rem] w-[11rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="pagination  text-center flex justify-center py-8 mt-10 rounded-2xl ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={100}
                color="primary"
                size="medium"
                siblingCount={4}
                boundaryCount={1}
                onChange={(e) => setPage(e.target.textContent)}
                defaultPage={1}
                variant="outlined"
                hideNextButton={true}
                hidePrevButton={true}
                shape="rounded"
                // showFirstButton="true"
                // showLastButton="true"
              />
            </ThemeProvider>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </Layout>
  );
};

export default TrendingMovies;
