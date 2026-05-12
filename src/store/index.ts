import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from '../store/reducers/contatos'
import filtroReducer from '../store/reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
