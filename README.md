# OnchainKit Buy Component Demo

This is a demo application showcasing the Buy Component from [OnchainKit](https://onchainkit.xyz/). 

The Buy component supports token swaps from USDC and ETH by default with the option to provide an additional token of choice using the fromToken prop. In addition, users are able to purchase tokens using their Coinbase account, Apple Pay, or debit card.


## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@coinbase/onchainkit](https://github.com/coinbase/onchainkit) - Onchain Components

## Featured Component

This demo specifically showcases the `Buy` component from OnchainKit, which enables users to purchase DEGEN tokens on Base (Chain ID: 8453). The component is configured with:

- Token: DEGEN
- Contract Address: 0x4ed4e862860bed51a9570b96d89af5e1b0efefed
- Sponsored: Enabled

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/buy-component-demo.git
cd buy-component-demo
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the demo.

## Component Usage

The Buy component is implemented with minimal configuration:

```tsx
import { Buy } from '@coinbase/onchainkit/buy';
import type { Token } from '@coinbase/onchainkit/token';

export default function BuyComponents() {
  const degenToken: Token = {
    name: 'DEGEN',
    address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
    symbol: 'DEGEN',
    decimals: 18,
    image: 'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/3b/bf/3bbf118b5e6dc2f9e7fc607a6e7526647b4ba8f0bea87125f971446d57b296d2-MDNmNjY0MmEtNGFiZi00N2I0LWIwMTItMDUyMzg2ZDZhMWNm',
    chainId: 8453,
  };

  return <Buy toToken={degenToken} isSponsored />;
}
```

## Features

- One-click integration of crypto purchasing
- Pre-configured for DEGEN token on Base
- Sponsored mode enabled for better UX
- Fully responsive design
- Type-safe implementation

## Requirements

- Node.js 18.17 or later
- Yarn package manager
- Web3 wallet (like MetaMask) for testing purchases

## Learn More

- [OnchainKit Documentation](https://onchainkit.xyz/)
- [Base Network](https://base.org/)
