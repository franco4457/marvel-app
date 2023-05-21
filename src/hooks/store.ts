import type { RootState, AppDispatch } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function useTypedSelector<T> (selector: (state: RootState) => T): T {
  return useSelector(selector)
}

// Select only characters slice
export const useCharactersSelector = () =>
  useTypedSelector((state: RootState) => state.characters)
