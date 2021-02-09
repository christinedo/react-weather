import React, { useEffect, useState } from "react";
import { useDebounce } from "../util/useDebounce";

export const SearchBar = ({ handleCityChange, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const visibility = isSearching || error ? "visible" : "invisible";

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setIsSearching(true);
    if (!event.target.value.length) {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleCityChange(debouncedSearchTerm);
      setIsSearching(false);
    }
  }, [handleCityChange, debouncedSearchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col items-center mt-8 mb-6'>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center w-screen min-w-min md:max-w-screen-sm'
      >
        <input
          className='w-9/12 px-6 py-2 rounded-full border-4 border-pink-400 bg-pink-50 placeholder-pink-400 placeholder-opacity-75 focus:outline-white focus:border-pink-500'
          autoComplete='off'
          type='text'
          name='city'
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search By City'
          onClick={() => setSearchTerm("")}
        />
      </form>
      <div className={`${visibility} h-5 mt-2 text-base font-semibold`}>
        {error && !isSearching && Boolean(searchTerm.length) && (
          <p className='uppercase text-red-500 bg-red-100 py-1 px-3'>
            {error.message}
          </p>
        )}
        {isSearching && (
          <p className='text-yellow-500 bg-yellow-100 py-1 px-3'>
            Searching...
          </p>
        )}
      </div>
    </div>
  );
};
