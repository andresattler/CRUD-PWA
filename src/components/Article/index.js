import React from 'react'

const Article = ({article}) =>
  <div>
    <h3>{article.title}</h3>
    <p>{article.text}</p>
  </div>

export default Article
