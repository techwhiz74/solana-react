import React, { useMemo } from "react";
// import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { CoinbaseWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter,SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletDisconnectButton,  WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"; // Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]); 
  // console.log(endpoint);
  // const walletConnectionErr = (error = WalletError) => {
  //   console.log("Wallet Connection Error:", error);
  // }
  // const wallet = useMemo(() => [new PhantomWalletAdapter(), new CoinbaseWalletAdapter(),new SlopeWalletAdapter(), new
  //   TorusWalletAdapter(), new SolflareWalletAdapter({ network })], [network]);

    const { connection } = useConnection();
    const wallet = useWallet();

  return (
    <div className="App">
      <div className="container has-background-grey-dark">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center"> solana phantom wallet</h1> 
            <WalletMultiButton className="wallet-btn-connect">
            connect wallet
            </WalletMultiButton>
            <>
              {wallet.connected && (
                <WalletDisconnectButton>disconnect wallet</WalletDisconnectButton>
              )}
            </>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
