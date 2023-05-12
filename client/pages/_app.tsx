import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import MainProviders from '../app/providers/MainProviders'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProviders>
      <Component {...pageProps} />
    </MainProviders>
  )
}
