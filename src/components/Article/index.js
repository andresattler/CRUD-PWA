import React from 'react'

import style from './style.styl'

const Article = ({article, toggleModal, index}) =>
  <div className={style.container}
    onClick={() => toggleModal(index)}
  >
    <h3>{article.title}</h3>
    <p>{article.text}</p>
  </div>

export default Article
