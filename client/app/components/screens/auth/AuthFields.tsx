import { FC } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/validEmail'

//всю типизацию берем из 'react-hook-form'
interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
  register,
  formState: { errors }, // такая заппис ьпозволяет сразу заберать error из formState
  isPasswordRequired = false
}) => {
  return (
    <>
      {/* e-mail */}
      <Field
        {...register('email', {
          required: 'Email is reqired',
          //pattern - нужен для того чтобы проверять именно валидный email по специальной переменной
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        })}
        placeholder="E-mail"
        error={errors.email as FieldError}
      />

      {/* пароль */}
      <Field
        {...register(
          'password',
          isPasswordRequired
            ? {
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'Please enter at least 6 characters'
                }
              }
            : {}
        )}
        placeholder="Password"
        type="password"
        error={errors.password as FieldError}
      />
    </>
  )
}

export default AuthFields
