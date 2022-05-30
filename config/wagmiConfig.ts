import {
    apiProvider,
    configureChains,
    getDefaultWallets
  } from '@rainbow-me/rainbowkit';
import { chain, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'

const alchemyId = process.env.TESTNET_ALCHEMY_ID

export const { chains, provider } = configureChains(
  [
    chain.mainnet, 
    chain.polygon,
    chain.polygonMumbai
  ], 
  [
    alchemyProvider({ alchemyId })
  ],
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