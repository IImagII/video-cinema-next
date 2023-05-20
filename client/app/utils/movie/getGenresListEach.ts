/** функция которая будет выводить элемент и если это
 *  последний элемент просто не будет ставить запятую */
export const getGenresListEach = (
  index: number,
  length: number,
  name: string
) => (index + 1 === length ? name : name + ',')

interface IArrayItem {
  name: string
}
/**просто функция которая выводит строку в которой через
 * запятую будут разделены категории фильма это нужно лоя
 * админ панели  components/screens/admin/useMovies.ts*/
export const getGenresList = (array: IArrayItem[]) =>
  array.map((item) => item.name).join(',')
