import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchContent from "./Pages/SearchContent";
import PopularMovies from "./Pages/PopularMovies";
import TrendingMovies from "./Pages/TrendingMovies";
import PoplularTvShows from "./Pages/PopularTV";
import MovieDetails from "./Pages/Details/MovieDetails";
import TvDetails from "./Pages/Details/TvDetails";
import PersonDetails from "./Pages/Details/PersonDetails";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="overflow-y-auto snap-mandatory snap-y scroll-smooth scrollbar-none">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/" element={<TrendingMovies />}></Route>
          <Route
            exact
            path="/popularMovies"
            element={<PopularMovies />}
          ></Route>
          <Route
            exact
            path="/popularTVshows"
            element={<PoplularTvShows />}
          ></Route>
          <Route
            exact
            path="/SearchContent/:inputTitle"
            element={<SearchContent />}
          />
          <Route exact path="/movieDetails/:id" element={<MovieDetails />} />
          <Route exact path="/tvDetails/:id" element={<TvDetails />} />
          <Route exact path="/personDetails/:id" element={<PersonDetails />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </div>
  );
};

export default App;
