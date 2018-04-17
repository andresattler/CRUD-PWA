import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, TOGGLE_MODAL, SELECT_ARTICLE } from '../actions'

export const initialState = {
  showModal: false,
  selectedI: -1,
  articles: [
    { id: 0,
      title: 'hello world!',
      text: 'test 1234'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return ({
        ...state,
        articles: [...state.articles, action.article]
      })
    case REMOVE_ARTICLE:
      return ({
        ...state,
        articles: state.articles.filter(article => article.id !== action.id)
      })
    case UPDATE_ARTICLE:
      return ({
        ...state,
        articles: state.articles.map(article => article.id === action.article.id ? action.article : article)
      })
    case TOGGLE_MODAL:
      return ({
        ...state,
        showModal: !state.showModal
      })
    case SELECT_ARTICLE:
      return ({
        ...state,
        selectedI: action.index
      })
    default:
      return state
  }
}

export default reducer
