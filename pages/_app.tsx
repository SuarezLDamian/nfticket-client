import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RainbowKitProvider, darkTheme, midnightTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { wagmiClient, chains } from '../config/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default MyApp
