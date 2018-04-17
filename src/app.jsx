import React from 'react'

import ArticleList from './container/ArticleList/'
import AddArticleButton from './container/AddArticleButton/'
import AddModal from './container/AddModal/'

const App = () =>
  <React.Fragment>
    <ArticleList />
    <AddArticleButton title='+' />
    <AddModal />
  </React.Fragment>

export default App
