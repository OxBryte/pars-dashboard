import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Exchange", href: "#" },
  { name: "Staking", href: "#" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  // Format address to show shortened version
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div>
      <div className="mx-auto bg-[#0a0a0a] border-b border-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 justify-between items-center hidden md:flex">
          <div className="w-[100px] h-6">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-end">
            {isConnected ? (
              <button
                className="bg-[#14c2a3] text-white px-4 py-2 rounded-md hover:bg-[#12a890] transition-colors"
                onClick={open}
              >
                {formatAddress(address)}
              </button>
            ) : (
              <button
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                onClick={open}
              >
                Connect Wallet
              </button>
            )}
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
            {isConnected ? (
              <button
                className="bg-[#14c2a3] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#12a890] transition-colors"
                onClick={open}
              >
                {formatAddress(address)}
              </button>
            ) : (
              <button
                className="bg-white text-black px-3 py-1.5 rounded-md text-sm hover:bg-gray-200 transition-colors"
                onClick={open}
              >
                Connect Wallet
              </button>
            )}
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
