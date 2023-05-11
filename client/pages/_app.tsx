import type { AppProps } from 'next/app'

import MainProviders from '../app/providers/MainProviders'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProviders>
      <Component {...pageProps} />
    </MainProviders>
  )
}
