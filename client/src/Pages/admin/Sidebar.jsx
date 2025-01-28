import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden lg:block w-[250px] space-y-8 border-r border-r-gray-300 dark:border-r-gray-700 bg-[#f0f0f0] dark:bg-[#020817] p-5 sticky top-0 h-screen">
        <div className="mt-20 space-y-4">
          <Link
            to="dashboard"
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link
            to="course"
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:p-20 bg-white dark:bg-[#020817]">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
