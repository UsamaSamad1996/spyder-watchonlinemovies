import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";

const Search = () => {
  /// Declarations

  const [inputTitle, setInputTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputTitle("");
    navigate(`/SearchContent/${inputTitle}`);
  };

  /// Return

  return (
    <div className="flex  justify-center items-center   py-2 bg-transparent border-t-[1px] border-b-[1px] border-[#202020] ">
      <div className="hidden md:block">
        <SearchOutlined className=" text-whites mr-3 " />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-transparent  text-whites font-semibold md:text-base lg:text-base px-2 my-2 w-[15rem] md:w-[20rem] lg:w-[18rem] placeholder:font-normal placeholder:text-whites placeholder:opacity-80 focus:outline-none placeholder:text-base"
          placeholder="Search for a movie, tv show, person......"
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button
          className="bg-transparent  ml-4  md:px-3 my-2  font-semibold uppercase text-whites text-sm  hover:text-[#f50f0f] transition-all duration-200 tracking-wide"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
