import React from 'react'

import ArticleList from './container/ArticleList/'
import AddArticleButton from './container/AddArticleButton/'

const App = () =>
  <React.Fragment>
    <ArticleList />
    <AddArticleButton title='+' />
  </React.Fragment>

export default App
