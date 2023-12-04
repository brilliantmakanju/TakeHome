import Image from "next/image";
import SidebarMenu from "./sidebarmenu";
import { SidebarData } from "../../../data";

const SideBarComponent = () => {
  return (
    <div className="p-4 py-6 flex gap-3 flex-col justify-start items-start sticky top-[40px] ">
      <div className="flex gap-6 mb-[10px] justify-start items-center">
        <Image
            width={50}
            height={50}
            alt="Profile"
            src={'/profile.png'}
            className="rounded-full  "
        />
        <div className="w-full flex flex-col justify-start items-start">
          <span className="text-[17px]">John Stewi</span>
          <span className="text-[10px] text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      {SidebarData.map((value, index) => (
        <div key={index} className="w-full flex flex-col justify-start items-start gap-2">
          {/* <div className="text-[20px]">{value.title}</div> */}
          {value.list.map((listValue, indexValue) => (
            <SidebarMenu
              key={indexValue}
              path={listValue.path}
              icon={listValue.icon}
              title={listValue.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBarComponent;
