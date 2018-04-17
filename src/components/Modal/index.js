import React from 'react'
import uuid from 'uuid/v1'

import style from './style.styl'

const Modal = ({ onSubmit, visible, toggleModal }) => {
  let title
  let text
  const clean = () => {
    title.value = ''
    text.value = ''
  }
  return (
    <div style={{display: visible ? 'flex' : 'none'}} className={style.modal}>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmit({
          id: uuid(),
          title: title.value,
          text: text.value
        })
        clean()
      }}>
        <p>Title:</p>
        <input ref={node => { title = node }} />
        <p> Text:</p>
        <textarea ref={node => { text = node }} />
        <button className={style.primary} type='submit'>Add</button>
        <button className={style.normal} onClick={e => {
          e.preventDefault()
          toggleModal()
          clean()
        }}>Close</button>
      </form>
    </div>
  )
}
export default Modal
