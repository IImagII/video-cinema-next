import cn from 'classnames'
import { FC, forwardRef } from 'react'

import styles from './Form.module.scss'
import { IField } from './form.interface'

/**компонент поля для формы
 * forwardRef - он оборачивает наш компонент
 * благодаря тому чтомыобьединилиего с нашим типом и типом стандартным HTMLInputElement
 * у нас доступны все поля присуще для input
 */
const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={cn(styles.common, styles.field)} style={style}>
        <label>
          <span>{placeholder}</span>
          <input type={type} ref={ref} {...rest} />
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)

Field.displayName = 'Field' // это нужно чтобы компонент понимал что у нас react компонент это нужно когда мы применили forwardRef

export default Field
