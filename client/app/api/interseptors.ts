/**это нужно для того чтобы сделать два axios то есть две разновидности  axios*/
import axios from 'axios'
import { API_URL_BASE } from 'config/api.config'

/** 1- вариант запроса без ничего авторизация к нему не предствалена */
export const axiosClassic = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})
