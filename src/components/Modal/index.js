import React from 'react'
import uuid from 'uuid/v1'

const Modal = ({ onSubmit }) => {
  let title
  let text
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmit({
          id: uuid(),
          title: title.value,
          text: text.value
        })
      }}>
        <p>Title:</p>
        <input ref={node => { title = node }} />
        <p> Text:</p>
        <textarea rows='4' ref={node => { text = node }} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
export default Modal
