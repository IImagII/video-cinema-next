import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

//это компонент который отвечает за вывод сообщенй от библиотеки toastr
const ReduxToastrMesage: FC = () => {
  /** newestOnTop - выввод сообщений вверху(true)
   * progressBar - чтобы было видно когда закончиться уведомление
   * timeOut={4000} - длительность сообщения
   */
  return (
    <ReduxToastr
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick
      timeOut={4000}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  )
}

export default ReduxToastrMesage
