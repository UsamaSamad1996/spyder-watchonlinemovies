import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import useFetch from "../Components/useFetch";
import { img_300 } from "../Config";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Spyder from "../Images/alter.jpg";
import Layout from "../LayoutComponents/Layout";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SearchContent = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { inputTitle } = useParams();
  const [page, setPage] = useState(1);

  const { data: searchMovie } = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=f73457624c316e91797e44cd04937419&query=${inputTitle}&language=en-US&page=${page}&include_adult=false`
  );

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [searchMovie]);

  //   <div className="flex justify-between pt-7 pb-2 w-full px-10">
  //   <div className="Searchmovie text-[#ffffff] text-2xl font-semibold ">
  //     {searchMovie?.results.length > 0 ? (
  //       <p> Total Search movie : {searchMovie.total_results}</p>
  //     ) : searchMovie?.results.length === 0 && searchMovie?.page > 0 ? (
  //       <p>
  //         Search Not Match
  //         <span>(found error : 404 - typing mistake)</span>
  //       </p>
  //     ) : (
  //       <p>Please Search Movie</p>
  //     )}
  //   </div>
  //   <div className="Searchmovie text-[#ffffff] text-2xl font-semibold ">
  //     {String(searchMovie?.page)} / {String(searchMovie?.total_pages)}
  //   </div>
  // </div>
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    // <div className="bg-gray flex flex-col items-center justify-center">
    //   {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    //   {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    //   <div className="w-[80%] pb-10 pt-3">
    //     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    //     <div className="flex justify-between pt-7 pb-2 w-full px-10 h-28 ">
    //       <h1 className=" text-whites text-3xl font-bold tracking-wider font-spyder xl:pl-2">
    //         {inputTitle} results
    //       </h1>
    //     </div>
    //     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    //     <div className="searchMovie flex flex-wrap gap-10  justify-center py-5  ">
    //       {searchMovie?.results.map((movie) =>
    //         movie.media_type === "movie" ? (
    //           <div
    //             className="movieDetailsCards text-[#ffffff] hover:text-[#f50f0f] hover:border-[#f50f0f]  hover:border-b-4 mb-5 bg-black rounded-xl xl:w-[18rem]  border-black border-b-2"
    //             key={movie.id}
    //           >
    //             <Link className="no-underline" to={`/movieDetails/${movie.id}`}>
    //               <img
    //                 className=" rounded-t-xl h-[27rem]"
    //                 src={
    //                   movie.poster_path === null && movie.backdrop_path === null
    //                     ? Dog
    //                     : movie.poster_path === null
    //                     ? `${img_300}/${movie.backdrop_path}`
    //                     : `${img_300}/${movie.poster_path}`
    //                 }
    //                 alt="no poster"
    //               />

    //               <h1 className="capitalize text-xl  px-3 pt-3   font-semibold  pb-3 truncate">
    //                 {movie.title}
    //               </h1>
    //             </Link>
    //             <div className="flex justify-between items-center  text-base uppercase font-semibold px-3 pb-3 ">
    //               <p>{movie.release_date}</p>
    //               <p>{movie.media_type}</p>
    //             </div>
    //           </div>
    //         ) : movie.media_type === "tv" ? (
    //           <div
    //             className="movieDetailsCards text-[#ffffff] hover:text-[#f50f0f] hover:border-[#f50f0f]  hover:border-b-4 mb-5 bg-black rounded-xl xl:w-[18rem]  border-black border-b-2"
    //             key={movie.id}
    //           >
    //             <Link className="no-underline" to={`/tvDetails/${movie.id}`}>
    //               <img
    //                 className=" rounded-t-xl h-[27rem]"
    //                 src={
    //                   movie.poster_path === null && movie.backdrop_path === null
    //                     ? Dog
    //                     : movie.poster_path === null
    //                     ? `${img_300}/${movie.backdrop_path}`
    //                     : `${img_300}/${movie.poster_path}`
    //                 }
    //                 alt="no poster"
    //               />

    //               <h1 className="capitalize text-xl  px-3 pt-3   font-semibold w-72 pb-3 truncate">
    //                 {movie.name}
    //               </h1>
    //             </Link>
    //             <div className="flex justify-between items-center  text-base uppercase font-semibold px-3 pb-3 ">
    //               <p>{movie.release_date}</p>
    //               <p>{movie.media_type}</p>
    //             </div>
    //           </div>
    //         ) : movie.media_type === "person" ? (
    //           <div
    //             className="movieDetailsCards text-[#ffffff] hover:text-[#f50f0f] hover:border-[#f50f0f]  hover:border-b-4  mb-5 bg-black rounded-xl xl:w-[18rem]  border-[#ffffff] border-b-4]"
    //             key={movie.id}
    //           >
    //             <Link
    //               className="no-underline"
    //               to={`/personDetails/${movie.id}`}
    //             >
    //               <img
    //                 className=" rounded-t-xl h-[27rem]"
    //                 src={
    //                   movie.profile_path === null
    //                     ? Dog
    //                     : `${img_300}/${movie.profile_path}`
    //                 }
    //                 alt="no poster"
    //               />

    //               <h1 className="capitalize text-xl  px-3 pt-3   font-semibold w-72 pb-3 truncate">
    //                 {movie.name}
    //               </h1>
    //             </Link>
    //             <div className="flex justify-between items-center  text-base uppercase font-semibold px-3 pb-3 ">
    //               <p>{movie.release_date}</p>
    //               <p>{movie.media_type}</p>
    //             </div>
    //           </div>
    //         ) : (
    //           ""
    //         )
    //       )}
    //     </div>
    //     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    //     <div className="pagination  text-center flex justify-center     py-8 mt-10 rounded-2xl ">
    //       <ThemeProvider theme={theme}>
    //         <Pagination
    //           count={searchMovie?.total_pages}
    //           color="primary"
    //           size="large"
    //           siblingCount={2}
    //           boundaryCount={3}
    //           onChange={(e) => setPage(e.target.textContent)}
    //         />
    //       </ThemeProvider>
    //     </div>
    //     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    //   </div>
    // </div>
    <Layout>
      <div className="bg-gray flex  items-center justify-center">
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="HomePage w-[81%] lg:w-[93%] xl:w-[87%] py-5 md:py-10 ">
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex  pt-7 pb-4 md:pb-7  w-full justify-center lg:justify-start ">
            <h1 className=" text-whites text-3xl font-bold tracking-wider font-spyder xl:pl-2">
              Results for : {inputTitle}
            </h1>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="searchMovie flex flex-wrap gap-8  justify-center py-5  ">
            {searchMovie?.results.map((movie) =>
              movie.media_type === "movie" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl max-w-[13rem]  border-black border-b-2"
                  key={movie.id}
                >
                  <Link
                    className="no-underline"
                    to={`/movieDetails/${movie.id}`}
                  >
                    <img
                      className=" rounded-t-xl h-[20rem] w-[13rem]"
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

                    <h1 className="capitalize text-base  p-3   font-semibold w-[13rem]  truncate">
                      {movie.title}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 w-[13rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : movie.media_type === "tv" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl w-[13rem]  border-black border-b-2"
                  key={movie.id}
                >
                  <Link className="no-underline" to={`/tvDetails/${movie.id}`}>
                    <img
                      className=" rounded-t-xl h-[20rem] w-[13rem]"
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

                    <h1 className="capitalize text-base  p-3   font-semibold w-[13rem]  truncate">
                      {movie.name}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 w-[13rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : movie.media_type === "person" ? (
                <div
                  className="movieDetailsCards transform transition-all hover:scale-105 text-whites hover:text-red hover:border-[#f50f0f]  hover:border-b-4 mb-8 bg-black rounded-xl xl:w-[18rem  border-[#ffffff] border-b-4]"
                  key={movie.id}
                >
                  <Link
                    className="no-underline"
                    to={`/personDetails/${movie.id}`}
                  >
                    <img
                      className=" rounded-t-xl h-[20rem] w-[13rem]"
                      src={
                        movie.profile_path === null
                          ? Spyder
                          : `${img_300}/${movie.profile_path}`
                      }
                      alt="no poster"
                    />

                    <h1 className="capitalize text-base  p-3   font-semibold w-[13rem]  truncate">
                      {movie.name}
                    </h1>
                  </Link>
                  <div className="flex justify-between items-center  text-xs tracking-wide uppercase font-semibold px-3 pb-4 w-[13rem] ">
                    <p>{movie.release_date}</p>
                    <p>{movie.media_type}</p>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="pagination  text-center flex justify-center     py-8 mt-10 rounded-2xl ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={searchMovie?.total_pages}
                color="primary"
                size="large"
                siblingCount={4}
                boundaryCount={1}
                onChange={(e) => setPage(e.target.textContent)}
              />
            </ThemeProvider>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </Layout>
  );
};

export default SearchContent;
