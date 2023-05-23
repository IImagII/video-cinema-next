import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import SkeletonLoader from '@/components/ui/Skeleton'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import formStyles from '../../../ui/form-elements/admin-form.module.scss'

import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

/** это нужно чтобы TextEditor грузился
 * толькона клиенте а не на сервере как это
 *  сделано по умолчанию*/

const DynamicTextEditor = dynamic(
  () => import('@/ui/form-elements/TextEditor'),
  {
    ssr: false //это реализация как можно компонент грузить тлько на клиенте менуя сервер хоть это и nextJS
  }
)

/**компонент для редактирования жанров он включает редактирование жанров
 * и редактирование описания с использованием редактора текста на основе Draft*/

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control //специальный аргумент для Draft будем использовать ниже в компоненте TextEditor
  } = useForm<IGenreEditInput>({
    mode: 'onChange' //тут показываем когда будет проводиться валидация
  })

  const { isLoading, onSubmit } = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={formStyles.field}>
              {/* тут формируем наше поле для редактирования жанров */}
              <Field
                {...register('name', {
                  required: 'Name is required!'
                })}
                placeholder="Name"
                error={errors.name}
                style={{ width: '31%' }}
              />
              <div style={{ width: '31%' }}>
                {/* компонент для генерации редактирования */}
                <SlugField
                  generate={
                    () => setValue('slug', generateSlug(getValues('name')))
                    // slug-потомучто это поле мы будем менять
                  }
                  register={register}
                  error={errors.slug}
                />
              </div>
              <Field
                {...register('name', {
                  required: 'Name is required!'
                })}
                placeholder="Name"
                error={errors.name}
                style={{ width: '31%' }}
              />
              {/* специальный компонент из react-hook-form он нужен для
              использования в TextEditor это сложное использование библиотеки 
              react-hook-form это мы пишем для того чтобы можно было использовать компонент TextEditor
              тоесть это какбы форма для валидацйии только сложная для валидации редактора текста на 
              основе draft который мы поместили в компонент TextEditor*/}

              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error }
                }) => (
                  <DynamicTextEditor
                    placeholder="Description"
                    onChange={onChange}
                    error={error}
                    value={value}
                  />
                )}
                //правила для валидации
                rules={{
                  validate: {
                    required: (v) =>
                      /**stripHtml взято из библиотеки string-strip-html
                       *  В приведенном коде используется библиотека или
                       *  функция stripHtml, которая, вероятно, предназначена
                       * для удаления HTML-тегов из строки.
                       */
                      (v && stripHtml(v).result.length > 0) ||
                      'Description is required!'
                  }
                }}
              />

              <Button>Update</Button>
            </div>
          </>
        )}
      </form>
    </Meta>
  )
}

export default GenreEdit
