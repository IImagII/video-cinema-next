import { IGenre } from '@/shared/types/movie.types'

/**в данном случае мы применили Omit для того чтобы убрать лишнее поле
 * в нашем случае это '_id', тоесть из Genre мі убрали одно поле
 * которое у нас редактироваться не будет
 */
export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
