import Image from "next/image";
import React from "react";
import {
  MdCalendarMonth,
  MdPieChart,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";

const NewestUser = () => {
  return (
    <div className="flex flex-col justify-start bg-[#182237] w-full rounded-md p-4 items-start">
      <span className="text-[20px] text-[#b7bac1]">Newest Users</span>
      <table className="w-full mt-[20px]">
        <thead>
          <tr className="font-medium">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Users</td>
            <td className="p-[10px]">Products</td>
            <td className="p-[10px]">Percentage</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex justify-start items-center gap-[10px] p-[10px]">
              Grace Mark
            </td>
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
          </tr>
          <tr>
            <td className="flex justify-start items-center gap-[10px] p-[10px]">
              Grace Mark
            </td>
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
          </tr>
          <tr>
            <td className="flex justify-start items-center gap-[10px] p-[10px]">
              Grace Mark
            </td>
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
          </tr>
          <tr>
            <td className="flex justify-start items-center gap-[10px] p-[10px]">
              Grace Mark
            </td>
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewestUser;
