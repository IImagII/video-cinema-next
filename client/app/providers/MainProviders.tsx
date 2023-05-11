import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Layout from '@/components/layout/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //** Опция refetchOnWindowFocus определяет, должен ли запрос автоматически повторяться при возвращении пользователя на страницу после того, как окно браузера было скрыто или свернуто */
      refetchOnWindowFocus: false
    }
  }
})

//тут у нас будет подключаться ве наши провайдеры это сделано для улучшения читабельности
const MainProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>{children}</Layout>
      </QueryClientProvider>
      {/* включение панели разработчика */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* Опционально: настройка панели разработчика */}
    </>
  )
}

export default MainProviders
