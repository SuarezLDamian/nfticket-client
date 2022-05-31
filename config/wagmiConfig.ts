import { configureChains, getDefaultWallets, connectorsForWallets, wallet } from '@rainbow-me/rainbowkit';
import { chain, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'

const alchemyId = process.env.TESTNET_ALCHEMY_ID || "X-Hag2hY3_W0wJycUUKa5AnbGTF4t1wL"

export const { chains, provider } = configureChains(
  [
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