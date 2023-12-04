import "../globals.css";
import DashboardFooter from "../ui/dashboard/footer";
import Navbar from "../ui/dashboard/navbar/navbar";
import SideBarComponent from "../ui/dashboard/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-3">
        <div className=" flex-1 bg-[#182237]">
          <SideBarComponent />
        </div>
        <div className=" flex-[4] gap-4 ">
          <Navbar />
          {children}
          <DashboardFooter />
        </div>
      </div>
    </>
  );
}
