import { FC } from 'react'

import Button from '../../form-elements/Button'

//это комопнент для кнопки для AdminGeader.tsx

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  //тут используем наш кастомный компонент button и к нему просто добавим  onClick
  return <Button onClick={onClick}>Создать новое</Button>
}

export default AdminCreateButton
