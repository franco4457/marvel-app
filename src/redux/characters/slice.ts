import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Filters = string

export type Pages = number

export interface CharactersState{
  filters: Filters
  pages: Pages
}

const initialState: CharactersState = {
  filters: '',
  pages: 0
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFilters: (state, action:PayloadAction<Filters>) => {
      const { payload } = action
      return { ...state, filters: payload }
    },
    clearFilters: (state) => ({ ...state, filters: '' }),
    setPages: (state, action:PayloadAction<Pages>) => ({ ...state, pages: action.payload })

  }
})

export default charactersSlice.reducer

export const { setFilters, clearFilters, setPages } = charactersSlice.actions
