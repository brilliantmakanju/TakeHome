import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

interface DataMenuProps {
  title: string;
  total: number;
}

const DataMenu = ({ title, total }: DataMenuProps) => {
  return (
    <div className=" rounded-md transition-all ease-in-out hover:bg-opacity-50 duration-300 hover:bg-[#b7bac1] w-[300px] bg-[#182237] flex justify-start items-start p-3 py-4 gap-4 ">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-2">
        <span className="text-[18px]">{title}</span>
        <span className="text-[24px] font-[500] ">{total}</span>
        <span className="text-[#27f727] font-[400]">
          12% <span className="text-[#b7bac1]">more than previous week</span>
        </span>
      </div>
    </div>
  );
};

export default DataMenu;
