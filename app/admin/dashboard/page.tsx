import AdminNewestUser from "@/app/ui/admin/dashboard/data/newestUser";
import DragDrop from "@/app/ui/admin/dashboard/draggable/drag-drop";
import React from "react";

const AdminDashboard = () => {
  return (
    <main className="w-full px-3 flex flex-col gap-5 rounded-md mb-[10px] py-3  justify-start items-start mt-3 bg-[#29303f]">
      <AdminNewestUser />
      <DragDrop />
    </main>
  );
};

export default AdminDashboard;
