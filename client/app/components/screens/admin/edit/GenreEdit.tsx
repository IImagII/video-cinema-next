import { FC } from 'react'
import { useForm } from 'react-hook-form'

import SkeletonLoader from '@/components/ui/Skeleton'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues
  } = useForm<IGenreEditInput>({
    mode: 'onChange' //тут показываем когда будет проводиться валидация
  })

  const { isLoading, onSubmit } = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div>
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
              <button>Update</button>
            </div>
          </>
        )}
      </form>
    </Meta>
  )
}

export default GenreEdit
