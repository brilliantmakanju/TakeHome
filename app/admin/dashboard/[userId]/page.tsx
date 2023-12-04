import AdminDashboardForm from "@/app/ui/admin/form/form";
import Image from "next/image";
import React from "react";

const SingleUser = () => {
  return (
    <main className="w-full flex gap-[50px] my-4 px-4 ">
      <div className="gap-3 flex-1 h-[380px] p-5 bg-[#182237] rounded-md bg-opacity-90 ">
        <label
          //   htmlFor="profileUpload"
          className="w-full group flex cursor-pointer mb-2 h-[300px] overflow-hidden relative"
        >
          <Image
            fill
            alt="mattew"
            src={"/user1.jpg"}
            className="object-cover rounded-md absolute top-0 left-0  "
          />
          <div className="absolute top-0 left-0 h-[300px] bg-transparent group-hover:bg-[#18223779] w-full bg-opacity-20 flex justify-center items-center transition-all ease-in-out duration-300 ">
            <span className="text-transparent group-hover:text-white transition-all ease-in-out duration-300">Upload</span>
          </div>
          <input
            type="file"
            accept="image/png"
            className="hidden"
            id="profileUpload"
          />
        </label>
        <span className="text-[20px] mt-[20px]">Mattew Stewi</span>
      </div>
      <div className="flex-[3] flex flex-col">
        <AdminDashboardForm />
      </div>
    </main>
  );
};

export default SingleUser;

