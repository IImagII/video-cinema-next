import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
  useAuthRedirect() //это наш кастомный хук для переадресации

  const { isLoading } = useAuth() //для кнопки которая будет неактивна если идет загрузка

  const [type, setType] = useState<'login' | 'register'>('login') // для того чтобы сделать форму в двух направлениях как авторизация/регистрация

  //настраиваем валидацию
  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset
  } = useForm<IAuthInput>({
    mode: 'onChange' // будет выводить ошибку при каждом изменении полей
  })

  //тут указываем action которые берутся из redux
  const login = (data: any) => {
    console.log('login', data)
  }
  const register = (data: any) => {
    console.log('register', data)
  }

  //сама функция выполнения валидации
  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset() // это сброс валидации после выполеняи функций она строенная в hook-form
  }

  return (
    <Meta title="Auth">
      <section className={styles.wrapper}>
        {/* тут формируем onSubmit из handleSubmit встроенная функция в hook-react и
        onSubmit-это то что мы написали сами функцию */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Auth" className="mb-6" />

          <AuthFields
            //это мы все берем что в начале указали при анстройке валидации
            formState={formState}
            register={registerInput}
            isPasswordRequired
          />

          <div className={styles.buttons}>
            {/* тут авторизация */}
            <Button
              type="submit"
              onClick={() => setType('login')}
              disabled={isLoading}
            >
              Login
            </Button>

            {/* тут регистрация */}
            <Button
              type="submit"
              onClick={() => setType('register')}
              disabled={isLoading}
            >
              Register
            </Button>
          </div>
        </form>
      </section>
    </Meta>
  )
}

export default Auth
