import React from 'react'

import Article from '../Article'

const ArticleList = ({ articles, toggleModal }) =>
  <div>
    {articles.map((article, i) =>
      <Article key={article.id} toggleModal={toggleModal} article={article} index={i} />
    )}
  </div>

export default ArticleList
