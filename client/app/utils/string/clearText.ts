/** эта функция очищат текст от лишних символов и отдает просто готовый текст
 * чтобы поисковик получал чистый текст
 * limit- это указываем сколько на нужно сиволов данного текста
 * тоже будет использоваться для seo для описания*/

export const onlyText = (
  _string: string,
  limit: null | number = null
): string => {
  let result = _string
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+./g, ' ')
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    )

  if (limit) result = result.slice(0, limit) + '...'

  return result
}
