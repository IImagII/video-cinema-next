/** функция которая будет выводить элемент и если это
 *  последний элемент просто не будет ставить запятую */
export const getGenresListEach = (
  index: number,
  length: number,
  name: string
) => (index + 1 === length ? name : name + ',')
