import React from "react";
import Input from "../../dashboard/form/input";
import Button from "../../dashboard/form/button";

const AdminDashboardForm = () => {
  return (
    <form
      action=""
      data-testid="formCont"
      className="flex flex-col p-5 bg-[#29303f] rounded-md my-3 gap-4 justify-start items-start w-full"
    >
      <Input
        required
        type="name"
        name="company_name"
        placeholder="Company Name"
      />
      <Input
        required
        type="email"
        name="company_email"
        placeholder="Company Email"
      />
      <Input
        required
        type="password"
        name="company_password"
        placeholder="Password"
      />

      <Button type="submit" />
    </form>
  );
};

export default AdminDashboardForm;
