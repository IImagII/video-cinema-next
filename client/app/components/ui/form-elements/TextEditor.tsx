import cn from 'classnames'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// стили для самого draft
import styles from './Form.module.scss'
import { ITextEditor } from './form.interface'

/**тут реализовываем компонент который будет редактировать поля с помощью
 * draft - редактора текста*/

const TextEditor: FC<ITextEditor> = ({
  onChange,
  value,
  placeholder,
  error
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  /**EditorState.createEmpty() - таким образом мі создали пустое default состояние */

  const [isUpdate, setIsUpdate] = useState(false) // это значит что мы будем подгружать состояниеодин раз до обновления

  useEffect(() => {
    //идет реализация draftjs
    /**идет загрузка наших данных в саму библиотеку draft */
    if (isUpdate) return //все что дальше будет работать

    const defaultValue = value || '' //ложим значение
    const blocksFromHtml = htmlToDraft(defaultValue) // для того чтобы перевести html в специальный формат длянашего редактора

    const contentState = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    )

    const newEditorState = EditorState.createWithContent(contentState)

    setEditorState(newEditorState)
  }, [isUpdate, value])

  //делаем функцию которая будет следитьна нашими значениями
  const onEditorStateChange = (editorState: EditorState) => {
    setIsUpdate(true) // меняем значение показываем что мы отредактировали
    setEditorState(editorState)

    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent()))) // для того чтобы записать обратно в react-hook-formпереводя его обратно в HTML
  }

  return (
    <div className={cn(styles.common, styles.editorWrapper, 'animate-fade')}>
      {/* он должен грузиться только на клиентской части */}
      <label>
        <span>{placeholder}</span>

        <div className={styles.wrapper}>
          {/* берем сам редактор его визуальную часть из библиотеки react-draft-wysiwyg */}

          <Editor
            toolbarClassName={styles.toolbar} //тут делаем только нашу кастомную панель тоесть берем те элементу которые нам нужны
            editorClassName={styles.editor} //чтобы editor отредактировать
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            spellCheck // проверка на ошибки
            //далее кастомизируем toolbar тоесть убераем ве лишнее что нам не надо

            toolbar={{
              options: ['inline', 'list'],
              inline: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline', 'strikethrough']
              },

              list: {
                inDrodown: false,
                options: ['unordered', 'ordered']
              }
            }}
          />
        </div>
        {error && <div className={styles.error}>{error.message}</div>}
      </label>
    </div>
  )
}

export default TextEditor
