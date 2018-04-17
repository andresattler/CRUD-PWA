import React from 'react'

import style from './style.styl'

const Button = props =>
  <button className={style.button} onClick={props.onClick}>{props.title}</button>

export default Button
