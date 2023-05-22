import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '../Field'

import styles from './SlugField.module.scss'

//это берем из react-hook-form
interface ISlugField {
  error?: FieldError
  register: UseFormRegister<any>
  generate: () => void
}

//этот компонент нужен для редактирования жанров
const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
  return (
    <div className="relative">
      <Field
        {...register('slug', {
          required: 'Slug is required!'
        })}
        placeholder="Slug"
        error={error}
      />
      <div className={styles.badge} onClick={generate}>
        generate
      </div>
    </div>
  )
}

export default SlugField
