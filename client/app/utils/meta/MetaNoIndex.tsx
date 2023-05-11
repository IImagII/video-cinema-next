import { titleMerge } from 'config/seo.config'
import Head from 'next/head'
import { FC } from 'react'

//это компонент который запрещает поисковому роботу обрабатывать  страницу если нет описания нужен для Meta
export const MetaNoIndex: FC<{ title?: string }> = ({ title = 'Error' }) => {
  return (
    <Head>
      <title>{titleMerge(title)}</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}
