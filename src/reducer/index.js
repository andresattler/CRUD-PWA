import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } from '../actions'

const initialState = {
  articles: [
    { id: 0,
      title: 'test',
      text: 'test'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return ({
        articles: [...state.articles, action.article]
      })
    case REMOVE_ARTICLE:
      return ({
        articles: state.articles.filter(article => article.id !== action.id)
      })
    case UPDATE_ARTICLE:
      return ({
        articles: state.articles.map(article => article.id === action.article.id ? action.article : article)
      })
    default:
      return state
  }
}

export default reducer
