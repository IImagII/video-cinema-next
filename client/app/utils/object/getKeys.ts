//функция кооторая получает все наши ключи из обьекта

export const getKeys = <T extends {}>(obj: T) =>
  Object.keys(obj) as Array<keyof T>
