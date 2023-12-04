import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Pagenation from "../pagination/pagenation";

const UsersTable = () => {
  return (
    <>
      <table className="w-[100%] mt-[20px]">
        <thead>
          <tr className="font-medium">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Users</td>
            <td className="p-[10px]">Products</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex justify-start items-center gap-[10px] p-[10px]">
              <Image
                width={40}
                height={40}
                alt="usernew"
                src={"/user1.jpg"}
                className="rounded-full object-cover "
              />
              Mattew Logic
            </td>
            <td className="p-[10px]">mattwe@gmail.com</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">400</span>
            </td>
            <td className="p-[10px]">800</td>
            <td className="p-[10px] ">
              <div className="flex gap-4 justify-start items-center">
                <Link
                  href={"userId"}
                  className=" bg-[#1b914e] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
                >
                  View{" "}
                  <span className="text-[20px]">
                    <MdEdit />
                  </span>
                </Link>
                <Link
                  href={"#"}
                  className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
                >
                  Delete{" "}
                  <span className="text-[20px]">
                    <MdDelete />
                  </span>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagenation />
    </>
  );
};

export default UsersTable;
