import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenuItem {
  icon: TypeMaterialIconName // тут мы сделали отдельный тип для иконок для того чтобы було лучше типизировано
  title: string
  link: string
}

export interface IMenu {
  title: string
  items: IMenuItem[]
}
