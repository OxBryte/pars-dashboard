import React from "react";
import { Home, Money } from "@mui/icons-material";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="hidden lg:flex h-[100vh] w-56 text-white py-8 px-4 flex-col gap-1 border-r border-[#1a1a1a]">
      <Link href="/">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all group">
          <Home className="text-lg" />
          <span className="font-medium text-sm">Dashboard</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all group">
          <Money className="text-lg" />
          <span className="font-medium text-sm">Trade</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all group">
          <Money className="text-lg" />
          <span className="font-medium text-sm">Staking</span>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
