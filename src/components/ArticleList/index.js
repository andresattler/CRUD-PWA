import React from 'react'

import Article from '../Article'

const ArticleList = ({ articles }) =>
  <div>
    {articles.map(article =>
      <Article key={article.id} article={article} />
    )}
  </div>

export default ArticleList
