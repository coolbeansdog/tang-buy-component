'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import BuyComponent from './components/BuyComponent';
export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Get Degen. Come onchain.
          </h1>
          <p className="text-xl dark:text-gray-500 text-gray-600 mb-8">
            Happily powered by <a href="https://onchainkit.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 dark:hover:text-gray-300">OnchainKit</a>.
          </p>
          <div className="flex justify-center">
            <BuyComponent /> 
          </div>
        </div>
      </main>

      <footer className="h-[100px]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Start building your own <a href="https://onchainkit.xyz/buy/buy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 dark:hover:text-gray-300">Buy component</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
