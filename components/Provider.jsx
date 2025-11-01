import React, { useState } from "react";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { arbitrum, base, mainnet, bsc } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

// 0. Setup queryClient with lazy initialization
function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });
}

// 1. Get projectId from https://dashboard.reown.com
const projectId = "9a74184db26c248be353c64159da58fe";

// 2. Create a metadata object - optional
const metadata = {
  name: "Spars App",
  description: "Spars App",
  url: "https://spars.app", // origin must match your domain & subdomain
  icons: ["https://spars.app/logo.png"],
};

// 3. Set the networks (BSC is required for this app)
const networks = [bsc, base, arbitrum, mainnet];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export function AppKitProvider({ children }) {
  // Use useState to ensure QueryClient is stable across re-renders
  const [queryClient] = useState(() => createQueryClient());

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
