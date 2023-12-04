import {
  MdDashboard,
  MdDashboardCustomize,
  MdOutlineSettings,
  MdSupervisedUserCircle,
} from "react-icons/md";
import Adminchart from "./ui/admin/dashboard/admin/chart";

export const SidebarData = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Company Data",
        path: "/dashboard/company_data",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Admin",
        path: "/dashboard/admin",
        icon: <MdDashboardCustomize />,
      }
    ],
  },
  // {
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //   ],
  // },
];

export const AdminSidebarData = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      }
    ],
  },
  // {
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/admin/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //   ],
  // },
];

export const DashboardData = [
  {
    title: "Total User",
    total: 1000,
  },
  {
    title: "Total Product",
    total: 140,
  },
];

export const AdminCharts = [
  {
    user: 'User A',
    chart: <Adminchart />
  },
  {
    user: 'User B',
    chart: <Adminchart />
  }
]
