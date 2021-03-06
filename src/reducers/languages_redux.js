import { createReducer, createActions } from 'reduxsauce'
import initialLang from '../base/data/languages'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchLanguages: null,
  fetchLanguagesSuccess: ['languages'],
  changeLanguage: ['language']
})

export const GetLanguagesTypes = Types
export default Creators

/* ------------- Initial State ------------ - */

export const INITIAL_STATE = {
  languages: initialLang,
  current: 'en'
}

/* ------------- Reducers ------------- */

const initialState = state => INITIAL_STATE

const fetchLanguagesSuccess = (state, { languages }) => ({
  ...state,
  languages
})

const changeLanguage = (state, { language }) => ({
  ...state,
  current: language
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_LANGUAGES]: initialState,
  [Types.FETCH_LANGUAGES_SUCCESS]: fetchLanguagesSuccess,
  [Types.CHANGE_LANGUAGE]: changeLanguage
})
