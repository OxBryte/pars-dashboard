import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState, useCallback } from "react";

export default function WithdrawableDividend({ customAddress }) {
  const address = useAddress();
  const { contract } = useContract(
    "0x593649F70f836565e33f0BCe9af9503c243359B3"
  );
  const {
    data: balance,
    refetch: refetchBalance,
    isLoading,
    error,
  } = useContractRead(contract, "withdrawableDividendOf", [address]);

  const refetchData = useCallback(() => {
    refetchBalance();
  }, [refetchBalance]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, [refetchData]);

  if (isLoading) {
    return <div className="text-gray-500 text-sm">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-400 text-sm">Error loading</div>;
  }

  const formattedBalance = balance
    ? Number(balance.toString()).toLocaleString()
    : "N/A";

  return (
    <div className="text-2xl font-semibold text-white">{formattedBalance}</div>
  );
}
