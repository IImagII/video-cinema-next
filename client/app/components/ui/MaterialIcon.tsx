import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

/**это комопннет который помогает нам работать с MaterialIcons коотрая
 * береться из бибилиотеки react-icons
 * то есть в нашем случае делаем динамическое имя*/

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name] //вот так делаем динамическое имя

  //** условие такое если переменная не найден какоето имя то вернет дефолт */
  return <IconComponent /> || <MaterialIcons.MdDragIndicator /> // тут мы возвращаем или наш компонент или то что етсь по дефолту
}

export default MaterialIcon
