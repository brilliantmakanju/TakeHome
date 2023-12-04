'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

interface SidebarMenuProps {
  icon: any;
  path: string;
  title: string;
}
// bg-[#b7bac1]
const SidebarMenu = ({ icon, path, title }: SidebarMenuProps) => {

    const pathname = usePathname()

  return (
    <div className={`flex bg-opacity-20 ${pathname === path ? 'bg-[#b7bac1] rounded-md' : '' }  w-full hover:bg-opacity-20 hover:rounded-md hover:bg-[#b7bac1] transition-all ease-in-out duration-300`}>
      <Link href={path} className="flex font-medium gap-3 w-full p-2 py-4 text-[15px] justify-start items-center ">
        <span className="text-[20px]">{icon}</span>
        {title}</Link>
    </div>
  );
};

export default SidebarMenu;
