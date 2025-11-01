import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import logo from "../assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Exchange", href: "#" },
  { name: "Staking", href: "#" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="mx-auto bg-[#0a0a0a] border-b border-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 justify-between items-center hidden md:flex">
          <div className="w-[100px] h-6">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-end">
            <ConnectWallet />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden py-4 px-6 justify-between flex items-center">
          <div className="w-[70px] h-6">
            <Image height={100} width={100} src={logo} alt="Logo" />
          </div>

          {mobileMenuOpen === true ? (
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <BsX size={24} />
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaBars size={20} />
            </button>
          )}
          <div className="flex justify-center items-center">
            <ConnectWallet />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 font-medium hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
