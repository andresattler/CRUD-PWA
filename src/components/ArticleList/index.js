import React from 'react'

const ArticleList = ({ articles }) =>
  <div>
    {articles.map(article =>
      <h1 key={article.id}>{article.title}</h1>
    )}
  </div>

export default ArticleList
