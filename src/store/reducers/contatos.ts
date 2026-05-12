import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: 'Lucas Holanda',
      email: 'holanda.ptr@gmail.com',
      telefone: '964152328'
    },
    {
      id: 2,
      titulo: 'Rodney Hernandez',
      email: 'hernandez.rodney@gmail.com',
      telefone: '965123626'
    },
    {
      id: 3,
      titulo: 'Mara Holanda',
      email: 'reis_mara@gmail.com',
      telefone: '964129811'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
