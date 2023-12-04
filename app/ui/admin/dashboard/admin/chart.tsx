"use client";
import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  LineChart,
  ResponsiveContainer,
} from "recharts";

const Adminchart = () => {
  const data = [
    {
      users: 2000,
      products: 4000,
    },
    {
      users: 5000,
      products: 8000,
    },
    {
      users: 1000,
      products: 600,
    },
    {
      users: 1000,
      products: 3000,
    },
    {
      users: 2390,
      products: 6000,
    },
    {
      users: 2050,
      products: 1500,
    },
    {
      users: 5000,
      products: 1000,
    },
  ];

  return (
    <div className="w-[550px] h-[550px]  bg-[#182237]  pt-[10px] pb-[70px] ">
      <h2 className="text-[25px] text-[#b7bac1] font-[400] px-[20px] py-3">
        Weekly Stat for User A
      </h2>
      <ResponsiveContainer width="100%" className="text-white" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip
            contentStyle={{
              background: "#151c2c",
              color: "white",
              border: "none",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="products"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Adminchart;
