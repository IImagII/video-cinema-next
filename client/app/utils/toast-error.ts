//функция коотрая позволяет обрабатывать ошибки
import { toastr } from 'react-redux-toastr'

//в данном случаем она подходит если вам приходит ошибки в массиве
export const errorCatch = (error: any): string =>
  error.response && error.response.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message

//функция для обработки ошибок через toast(это библиотека которая позволяетвыводить уведомления)
export const toastError = (error: any, title = 'Error request') => {
  const message = errorCatch(error)
  toastr.error(title, message)
  throw message
}
