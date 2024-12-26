import { Buy } from '@coinbase/onchainkit/buy'; 
import type { Token } from '@coinbase/onchainkit/token';
 
export default function BuyComponents() { 
  const tangToken: Token = {
    name: 'TANG',
    address: '0xcc3aba72bb8d3e38745b4fb9941141a85b3b1fd8',
    symbol: 'TANG',
    decimals: 18,
    image:
    'https://basescan.org/token/images/basedtangcat_32.png',
    chainId: 8453,
  };
 
  return ( 
    <Buy toToken={tangToken} isSponsored />
  ) 
}