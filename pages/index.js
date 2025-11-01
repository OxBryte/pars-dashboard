import React from "react";
import { SideNav, MainContent } from "../components";

const Home = () => {
  return (
    <div className="container-lg main-container bg-[#0a0a0a] scroll-smooth hover:scroll-auto">
      <div className="flex">
        <div className="hidden lg:block bg-[#0a0a0a]">
          <SideNav />
        </div>
        <div className="flex-1 bg-[#0a0a0a]">
          <div className="w-full">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
