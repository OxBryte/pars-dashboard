import React from "react";
import { Dashboard } from "./index";

const MainContent = () => {
  return (
    <div>
      <div className="min-h-[100vh] text-white lg:py-12 py-8 lg:flex flex-col gap-12 items-start overflow-auto px-6 lg:px-12">
        {/* header */}
        <div className="flex flex-col gap-3 lg:mb-0 mb-8 items-start w-full">
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <div className="bg-gradient-to-r from-[#14c2a3] to-transparent w-24 h-[2px]"></div>
        </div>
        {/* dashboard */}
        <Dashboard />
      </div>
    </div>
  );
};

export default MainContent;
