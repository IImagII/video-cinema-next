import type { AppProps } from 'next/app'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'

import MainProviders from '../app/providers/MainProviders'

// это сделано для того чтобы поменять AppProps который был изначально на свой тип это нужно для типизации Component
type TypeAppProps = TypeComponentAuthFields & AppProps

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
    <MainProviders Component={Component}>
      <Component {...pageProps} />
    </MainProviders>
  )
}
