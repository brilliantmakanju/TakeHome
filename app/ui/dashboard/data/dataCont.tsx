import { DashboardData } from "@/app/data";
import React from "react";
import DataMenu from "./dataMenu";

const DataCont = () => {
  return (
    <div className="w-full flex justify-start items-start">
      <div className="w-full [&>*:nth-child(1)]:bg-[#b7bac1] [&>*:nth-child(1)]:bg-opacity-50 flex justify-start items-start gap-6">
        {DashboardData.map((value, index) => (
          <DataMenu
            key={index}
            title={value.title}
            total={value.total}
          />
        ))}
      </div>
    </div>
  );
};

export default DataCont;
