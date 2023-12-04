import AdminNavbar from "../ui/admin/dashboard/navbar/navbar";
import AdminSideBarComponent from "../ui/admin/dashboard/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-3">
        <div className=" flex-1 bg-[#182237]">
          <AdminSideBarComponent />
        </div>
        <div className=" flex-[4] gap-4 ">
          <AdminNavbar />
          {children}
          {/* <DashboardFooter /> */}
        </div>
      </div>
    </>
  );
}
