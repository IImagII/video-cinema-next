import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

import { checkAuth, login, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
  user: getStoreLocal('user'), // функция с помощью коотрой можно получить user из localStorage
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register - название нашего action из файла user.actions.ts
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      //тут пошел уже login action из файла user.actions.ts
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      //тут берем logout
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      })
      //тут пишем action checkAuth
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
  }
})

export const userReducer = userSlice.reducer
