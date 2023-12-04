import React from "react";
import Input from "./input";
import Button from "./button";

const DashboardForm = () => {
  return (
    <form
      data-testid="dashboardform"
      action=""
      className="flex flex-col p-5 bg-[#29303f] rounded-md my-3 gap-4 justify-start items-start w-full"
    >
      <div className="flex w-full justify-start items-start gap-5">
        <Input
          required
          type="text"
          name="company_name"
          placeholder="Company Name"
        />
      </div>
      <div className="flex w-full justify-start items-start gap-5">
        <Input
          required
          type="number"
          name="users_number"
          placeholder="Number of Users"
        />
        <Input
          required
          type="number"
          name="products_number"
          placeholder="Number of Products"
        />
      </div>
      <Input
        required
        type="number"
        disabled={true}
        name="percentage"
        placeholder="Percentage"
      />
      <Button type="submit" />
    </form>
  );
};

export default DashboardForm;
