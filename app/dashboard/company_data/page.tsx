import CompanyTable from "@/app/ui/dashboard/company_data/company_table";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";

const Users = () => {
  return (
    <main className="w-full flex flex-col gap-[10px] rounded-md mb-[10px] py-3  justify-start items-start mt-3 bg-[#29303f]">
      <div className="w-full flex justify-between rounded-md py-4 px-5 items-center">
        <Search placeholder="Search for user..." />
        <Link href={"add"} className="bg-[#19199d] text-[white] px-4 py-2 rounded-md ">Add New</Link>
      </div>
      <div className="w-full px-5">
        <CompanyTable />
      </div>
    </main>
  );
};

export default Users;
