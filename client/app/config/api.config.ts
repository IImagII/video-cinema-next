export const API_URL = `${process.env.API_URL}/api` // тут берем из нашего конфига но возможно из просто env

export const getGenresUrl = (string: string) => `/genres${string}`
