import { NextPage } from 'next'

/**описываем параметры  благодаря которым мы будем потом на странице их писать и
 * делить страницы ндля администратора и для пользователя*/
export type TypeRoles = {
  isOnlyAdmin?: boolean
  isOnlyUser?: boolean
}

/** вместо стандартного NextPage мы делаем свой тип который
 * поможет нам правильно проверять роли на странице*/
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }

/**далее мы это будем применять впервые на странице ProfilePage(pages/profile.tsx) */
