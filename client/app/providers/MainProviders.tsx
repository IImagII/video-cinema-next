import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import { store } from '@/store/store'

import ReduxToastrMesage from './ReduxToastrMesage'
import HeadProvider from './head-provider/HeadProvider'

//подключение  react-query
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
      {/* тут добавляем HeadProvider это наш прогресс загрузки страницы красивый */}
      <HeadProvider>
        {/* Provider- подключение toolkit */}
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {/* подключаем наш компонент который отвечает за вывод сообщений */}
            <ReduxToastrMesage />
            <Layout>{children}</Layout>
          </QueryClientProvider>
          {/* включение панели разработчика */}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          {/* Опционально: настройка панели разработчика */}
        </Provider>
      </HeadProvider>
    </>
  )
}

export default MainProviders
