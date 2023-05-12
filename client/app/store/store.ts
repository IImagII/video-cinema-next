import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'

export const store = configureStore({
  reducer: reducers
})

//типы для нашего хранилища
export type TypeRootState = ReturnType<typeof store.getState>
