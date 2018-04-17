import React from 'react'
import uuid from 'uuid/v1'

import style from './style.styl'

const Modal = ({ updateArticle, addArticle, visible, toggleModal, article }) => {
  let title
  let text
  if (visible) {
    return (
      <div className={style.modal}>
        <form onSubmit={e => {
          e.preventDefault()
          const nextArticle = {
            id: article ? article.id : uuid(),
            title: title.value,
            text: text.value
          }
          article ? updateArticle(nextArticle) : addArticle(nextArticle)
        }}>
          <p>Title:</p>
          <input ref={node => { title = node }} defaultValue={article ? article.title : ''} />
          <p> Text:</p>
          <textarea ref={node => { text = node }} defaultValue={article ? article.text : ''} />
          <button className={style.primary} type='submit'>{article ? 'Edit' : 'Add'}</button>
          <button className={style.normal} onClick={e => {
            e.preventDefault()
            toggleModal()
          }}>Close</button>
        </form>
      </div>
    )
  } else return null
}
export default Modal
