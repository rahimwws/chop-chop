import { AppKit, createAppKit } from "@reown/appkit-wagmi-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { mainnet } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { projectId, wagmiConfig } from "@/utils/wagmi";
import PortalProvider from "./PortalProvider";

// 0. Setup queryClient
const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
});

export default function Provider({ children }: Props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            {children}
            <AppKit />
          </QueryClientProvider>
        </WagmiProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
