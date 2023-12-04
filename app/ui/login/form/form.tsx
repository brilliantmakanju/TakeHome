import React from "react";
import Button from "./button";
import Input from "./input";

const LoginForm = () => {
  return (
    <form
      action=""
      className="flex flex-col p-5 bg-[#29303f] rounded-md my-3 gap-4 justify-start items-start w-[500px]"
    >
      <h3 className="text-[50px] flex justify-center items-center w-full font-medium text-center text-[#2dbd2d] ">
        Login
      </h3>
      <div className="flex flex-col w-full justify-start items-start gap-5">
        <Input required type="email" name="email" placeholder="Email" />
        <Input
          required
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <Button type="submit" />
    </form>
  );
};

export default LoginForm;
