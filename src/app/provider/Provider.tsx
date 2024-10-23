import { AppKit, createAppKit } from "@reown/appkit-wagmi-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { mainnet } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { projectId, wagmiConfig } from "@/utils/wagmi";
import PortalProvider from "./PortalProvider";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet,
  enableAnalytics: true,
});

export default function Provider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            {isReady ? children : null}
            <AppKit />
          </QueryClientProvider>
        </WagmiProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
