import reducer from './index.js'
import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } from '../actions'

test('default', () => {
  expect(reducer(undefined, {})).toEqual({ articles: [] })
})

test('test AddArticle', () => {
  expect(reducer(undefined,
    { type: ADD_ARTICLE,
      article:
        { id: 0,
          title: 'hello world',
          text: 'test1234'
        }
    })
  ).toEqual({
    articles: [
      { id: 0,
        title: 'hello world',
        text: 'test1234'
      }
    ]
  })
})

test('test removeArticle', () => {
  expect(reducer({
    articles: [
      { id: 0,
        title: 'hello world',
        text: 'test1234'
      }
    ]},
  { type: REMOVE_ARTICLE,
    id: 0
  })).toEqual({ articles: [] })
})

test('test updateArticle', () => {
  expect(reducer({
    articles: [
      { id: 0,
        title: 'hello world',
        text: 'test1234'
      }
    ]},
  { type: UPDATE_ARTICLE,
    article: {
      id: 0,
      title: 'hello update!',
      text: 'I´ve got updated'
    }
  })).toEqual({ articles: [
    { id: 0,
      title: 'hello update!',
      text: 'I´ve got updated'
    }
  ]})
})
