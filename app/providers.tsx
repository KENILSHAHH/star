import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "6bfa0a4a-66b7-42b4-99e9-f7be82673f84",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
