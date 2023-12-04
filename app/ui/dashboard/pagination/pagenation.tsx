import React from "react";

const Pagenation = () => {
  return (
    <div className="flex gap-5 justify-between w-full py-5 items-center">
      <button
        className="bg-white rounded-md py-[5px] px-[10px] disabled:cursor-not-allowed cursor-pointer text-[#182237] disabled:bg-opacity-30 bg-opacity-90 "
        disabled
      >
        Previous
      </button>
      <button className="bg-white rounded-md py-[5px] px-[10px] disabled:cursor-not-allowed cursor-pointer text-[#182237] disabled:bg-opacity-30 bg-opacity-90 ">
        Next
      </button>
    </div>
  );
};

export default Pagenation;
