"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const title = pathname.split("/").pop()

  return (
    <div
      data-testid="topnavbar"
      className="w-full py-4 px-3 bg-opacity-30 rounded-md mt-2 bg-[#b7bac1] flex justify-start items-center"
    >
      <div className="font-[500] text-[20px] capitalize ">
        {title}
      </div>
    </div>
  );
};

export default Navbar;
