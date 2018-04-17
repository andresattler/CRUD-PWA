import React from 'react'

import style from './style.styl'

const Article = ({article}) =>
  <div className={style.container}>
    <h3>{article.title}</h3>
    <p>{article.text}</p>
  </div>

export default Article
