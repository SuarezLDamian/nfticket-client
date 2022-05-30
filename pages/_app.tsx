import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RainbowKitProvider, darkTheme, midnightTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { wagmiClient, chains } from '../config/wagmiConfig';
import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme({
        accentColor: '#5020B8',
        borderRadius: 'medium',
        fontStack: 'system',
        accentColorForeground: '#FFFFFA',
      })}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default MyApp
