import reducer, { initialState } from './index.js'
import { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, TOGGLE_MODAL } from '../actions'

test('default', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('test AddArticle', () => {
  expect(reducer(undefined,
    { type: ADD_ARTICLE,
      article:
        { id: 1,
          title: 'hello world',
          text: 'test1234'
        }
    }).articles).toEqual([
    ...initialState.articles,
    { id: 1,
      title: 'hello world',
      text: 'test1234'
    }
  ])
})

test('test removeArticle', () => {
  expect(reducer(initialState,
    { type: REMOVE_ARTICLE,
      id: 0
    }).articles).toEqual([])
})

test('test updateArticle', () => {
  expect(reducer(initialState,
    { type: UPDATE_ARTICLE,
      article: {
        id: 0,
        title: 'hello update!',
        text: 'I´ve got updated'
      }
    }).articles).toEqual([
    { id: 0,
      title: 'hello update!',
      text: 'I´ve got updated'
    }
  ])
})

test('test toggleModal', () => {
  expect(reducer(initialState, { type: TOGGLE_MODAL }))
    .toEqual({
      ...initialState,
      showModal: true
    })
})
