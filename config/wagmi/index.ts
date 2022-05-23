import {
    apiProvider,
    configureChains,
    getDefaultWallets
  } from '@rainbow-me/rainbowkit';
import { chain, createClient } from 'wagmi';

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [
    apiProvider.alchemy(process.env.ALCHEMY_ID),
    apiProvider.fallback()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'NFTicket',
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})