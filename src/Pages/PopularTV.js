import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Components/useFetch";
import { img_300 } from "../Config";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../LayoutComponents/Layout";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PoplularTvShows = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [page, setPage] = useState(1);

  const { data: popularTVshows } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=f73457624c316e91797e44cd04937419&page=${page}`
  );

  // console.log(popularTVshows);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [popularTVshows]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Layout>
      <div className="bg-gray flex items-center justify-center">
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 ">
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex  pt-7 pb-4 md:pb-7  w-full justify-center lg:justify-start ">
            <h1 className=" text-whites text-3xl font-bold tracking-wider font-spyder xl:pl-2">
              Popular Tv Shows
            </h1>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="popular flex flex-wrap gap-8  justify-center py-5  ">
            {popularTVshows?.results.map((movie) => (
              <div
                className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl max-w-[13rem]  border-black border-b-2"
                key={movie.id}
              >
                <Link className="no-underline" to={`/tvDetails/${movie.id}`}>
                  <img
                    className=" rounded-t-xl h-[20rem] "
                    src={`${img_300}/${movie.poster_path}`}
                    alt="no poster"
                  />

                  <h1 className="capitalize text-base  p-3 font-semibold truncate w-[13rem]">
                    {movie.name}
                  </h1>
                </Link>
                <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 w-[13rem] ">
                  <p>{movie.first_air_date}</p>
                  <p>Tv</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination  text-center flex justify-center     py-8 mt-10 rounded-2xl ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={popularTVshows?.total_pages}
                color="primary"
                size="large"
                siblingCount={4}
                boundaryCount={1}
                onChange={(e) => setPage(e.target.textContent)}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PoplularTvShows;
