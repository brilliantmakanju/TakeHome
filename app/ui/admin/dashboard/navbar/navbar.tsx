"use client";
import { usePathname } from "next/navigation";
import React from "react";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full py-4 px-3 bg-opacity-30 rounded-md mt-2 bg-[#b7bac1] flex justify-start items-center">
      {/* Navigation */}
      <div className="font-[500] text-[20px] capitalize ">
        {pathname.split("/").pop()}
      </div>
    </div>
  );
};

export default AdminNavbar;
