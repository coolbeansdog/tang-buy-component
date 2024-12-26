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
    <div className="flex flex-col min-h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src='/video/tang_smack.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container bg-opacity-20 bg-gray-800 rounded-lg px-4 py-2 hover:bg-opacity-30 transition">
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

      <main className="flex-grow flex items-center justify-center px-4 sm:px-10 md:px-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-white animate-glow">
            buy $TANG neow.
          </h1>
          <div className="buy-container bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <BuyComponent />
          </div>
        </div>
      </main>

      <footer className="h-[100px] bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              Made with ❤️ by{' '}
              <a
                href="https://x.com/zawarudonft"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                zawarudonft
              </a>{' '}
              using OnchainKit
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
