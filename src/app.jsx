import React from 'react'

import ArticleList from './container/ArticleList/'
import AddArticleButton from './container/AddArticleButton/'
import AddModal from './container/AddModal/'

import style from './style.styl'

const App = () =>
  <div className={style.container}>
    <ArticleList />
    <AddArticleButton title='+' />
    <AddModal />
  </div>

export default App
