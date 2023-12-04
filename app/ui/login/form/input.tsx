import React from "react";

interface InputProps {
  name: string;
  type: string;
  required: boolean;
  disabled?: boolean;
  placeholder: string;
}

const Input = ({ name, type, required, disabled, placeholder }: InputProps) => (
  <input
    type={type}
    name={name}
    required={required}
    disabled={disabled}
    placeholder={placeholder}
    className="w-[100%] p-[20px] text-[white] bg-transparent rounded-md outline-none border-[2px] border-[#2e374a] mb-[30px] "
  />
);

export default Input;
