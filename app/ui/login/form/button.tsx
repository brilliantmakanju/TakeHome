"use client";
import React from "react";
// import { useFormStatus } from "react-dom";

interface ButtonProps {
  type: "button" | "submit" | "reset";
}

const Button = ({ type }: ButtonProps) => {
  return (
    <button type={type} className="w-full bg-[teal] p-4 rounded-md ">
      Submit
    </button>
  );
};

export default Button;
