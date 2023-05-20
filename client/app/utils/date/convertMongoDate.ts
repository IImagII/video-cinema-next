//функция преобразования в русскоязычный формат
export const convertMongoDate = (date: string) =>
  new Date(date).toLocaleDateString('ru')
