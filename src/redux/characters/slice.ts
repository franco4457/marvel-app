import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Filters = string

export interface CharactersState{
  filters: Filters
}

const initialState: CharactersState = {
  filters: ''
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFilters: (state, action:PayloadAction<Filters>) => {
      const { payload } = action
      return { ...state, filters: payload }
    },
    clearFilters: (state) => ({ ...state, filters: '' })
  }
})

export default charactersSlice.reducer

export const { setFilters, clearFilters } = charactersSlice.actions
