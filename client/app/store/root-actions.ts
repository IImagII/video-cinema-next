import * as userActions from './user/user.actions'

//сюда будут добавляеться все наши actions
export const rootAction = {
  ...userActions
}

/**это делается для того чтобы сделать кастомный хук и спомощью одного хука
 *  мы могли получить доступ к любому нашему actions который находиться
 * в hook/useActions.ts */
