import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuBookRounded } from "@material-ui/icons";

const Navbar = () => {
  /////////////////////////////////////////////////////////////////////

  const [isOpen, setIsOpen] = useState(false);

  /////////////////////////////////////////////////////////////////////

  return (
    <nav
      id="search"
      className="flex items-center bg-transparent text-[#ffffff] h-[7rem] pt-2 snap-start"
    >
      <section className="logo flex  items-center justify-center lg:justify-end  w-full md:w-auto  ">
        <h1 className="xl:px-24 md:pl-12 md:pr-4 font-spyder font-bold text-5xl  lg:text-[4rem] text-red  tracking-wide py-1 ">
          SPY
          <span className=" text-2xl lg:text-3xl text-whites font-bold uppercase">
            Movies
          </span>
        </h1>
      </section>
      <div className="botton md:hidden w-[1rem] mr-10">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuBookRounded className="text-white" />
        </button>
      </div>
      <section className="w-full hidden md:flex justify-evenly  items-center font-semibold uppercase text-sm tracking-wide   ">
        <NavLink className="hover:text-red transition-all duration-200" to="/">
          Trending Media
        </NavLink>
        <NavLink
          className="hover:text-red transition-all duration-200"
          to="/popularMovies"
        >
          Movies
        </NavLink>
        <NavLink
          className="hover:text-red transition-all duration-200"
          to="/popularTVshows"
        >
          Tv Shows
        </NavLink>
      </section>

      {isOpen ? (
        <section className="absolute left-0 top-[5.5rem] h-screen bg-black w-screen z-10 flex flex-col items-center gap-16 font-bold uppercase text-base tracking-wide pt-10  border-t-[1px] border-[#2b2929] overflow-hidden">
          <NavLink
            className="hover:text-red transition-all duration-200"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Trending Media
          </NavLink>
          <NavLink
            className="hover:text-red transition-all duration-200"
            to="/popularMovies"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            className="hover:text-red transition-all duration-200"
            to="/popularTVshows"
            onClick={() => setIsOpen(false)}
          >
            Tv Shows
          </NavLink>
        </section>
      ) : null}
    </nav>
  );
};

export default Navbar;
