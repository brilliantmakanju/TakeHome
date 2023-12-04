import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete } from "react-icons/md";
import Pagenation from "../pagination/pagenation";

const CompanyTable = () => {
  return (
    <>
      <table className="w-[100%] mt-[20px]">
        <thead>
          <tr className="font-medium">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Users</td>
            <td className="p-[10px]">Products</td>
            <td className="p-[10px]">Percentage</td>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
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
            <td className="p-[10px]">10.6.2024</td>
            <td className="p-[10px]">
              <span className=" p-3 px-2 rounded-md">40</span>
            </td>
            <td className="p-[10px]">400</td>
            <td className="p-[10px]">40%</td>
            <td className="p-[10px">
              <Link
                href={"#"}
                className=" bg-[crimson] p-1 w-[80px] rounded-md gap-1 text-white flex justify-center items-center"
              >
                Delete{" "}
                <span className="text-[20px]">
                  <MdDelete />
                </span>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagenation />
    </>
  );
};

export default CompanyTable;
