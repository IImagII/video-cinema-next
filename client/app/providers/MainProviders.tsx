import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import { store } from '@/store/store'

import ReduxToastrMesage from './ReduxToastrMesage'
import AuthProvider from './auth-provider/AuthProvider'
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
const MainProviders: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component
}) => {
  return (
    <>
      {/* тут добавляем HeadProvider это наш прогресс загрузки страницы красивый */}
      <HeadProvider>
        {/* Provider- подключение toolkit */}
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {/* подключаем наш компонент который отвечает за вывод сообщений */}
            <ReduxToastrMesage />
            {/* это наш кастомный провайдер который следит за ролями в приложении  */}
            {/* Component берем из файла pages/_app.tsx */}
            <AuthProvider Component={Component}>
              <Layout>{children}</Layout>
            </AuthProvider>
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
