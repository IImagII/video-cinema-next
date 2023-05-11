import { siteName, titleMerge } from 'config/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import logoImage from '@/assets/images/logo.svg'

import { onlyText } from '../string/clearText'

import { MetaNoIndex } from './MetaNoIndex'
import { ISeo } from './meta.interface'

//это компоннет для мета данных для всего приложениядля SEO оптимизации
const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image,
  children
}) => {
  const { asPath } = useRouter() // чтобы взять текущий путь
  const currentUrl = `${process.env.NEXT_PUBLIC_URL}${asPath}` // тут именно получим текущий полный путь тоесть по сути сумму нашего домена + текущий роут перехода

  return (
    <>
      {description ? (
        <Head>
          <title itemProp="headline">{titleMerge(title)}</title>
          <meta
            itemProp="description"
            name="description"
            content={onlyText(description, 152)}
          />
          <link rel="canonical" href={currentUrl} />
          <meta property="og:locale" content="en" />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content={image || logoImage} />
          <meta property="og:site_name" content={siteName} />
          <meta
            property="og:description"
            content={onlyText(description, 197)}
          />
        </Head>
      ) : (
        //если у нас этого описания нет вообзек то мы запрещаем кабы эту страницу для поисковика
        <MetaNoIndex title={title} />
      )}

      {children}
    </>
  )
}

export default Meta
