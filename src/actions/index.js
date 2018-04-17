export const ADD_ARTICLE = 'ADD_ARTICLE'
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'

export const addArticle = article => ({
  type: ADD_ARTICLE,
  article
})

export const removeArticle = id => ({
  type: REMOVE_ARTICLE,
  id
})

export const updateArticle = article => ({
  type: UPDATE_ARTICLE,
  article
})

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

export const selectArticle = index => ({
  type: SELECT_ARTICLE,
  index
})
