import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchProps {
  search?: string;
  placeholder: string;
}

const Search = ({ search, placeholder }: SearchProps) => {
  return (
    <div className="flex justify-start items-center gap-2  bg-[#2e374a] p-2 rounded-md">
      <MdSearch data-testid='search-icon' size={20} />
      <input
        data-testid='search-input'
        type="text"
        placeholder={placeholder}
        className=" bg-transparent border-none text-white outline-none  "
      />
    </div>
  );
};

export default Search;
