import { useState } from "react"
import React from 'react'

export default function Component() {

    const[textchange, setText ] = useState()
    const TextOnChange = (event) => {
    setText(event.target.value)
    }

  return (
    <div>
        <h1>MI PRIMERA PAGINA CON REACT</h1>
        <p>HOLA MUNDO CHAVALLLEEEEEE</p>
        <input type="text" value={textchange} onChange={TextOnChange} />
        <button>Save</button>
        <p>Ingresa algo</p>
        <h2>Hola: {textchange}</h2>
    </div>
  )
}
