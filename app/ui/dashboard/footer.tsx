import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer data-testid='footer' className="p-4  sm:p-6 pt-10 md:py-20 bg-[#182237]  text-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 w-[500px] md:mb-0 flex gap-3 justify-start items-start">
            <Link
              href={"/"}
              className="font-semibold text-[white] text-[25px] font-sans "
            >
              Dev Toll
            </Link>
          </div>
          
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Dev Toll{" "}
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
