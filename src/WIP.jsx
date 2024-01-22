import React from 'react'
import { useState } from 'react'
import './styles/WIP.scss'

function WIP() {
  const [show, setShow] = useState(true);
  return (
    <div id="WIP" className={show ? '' : 'hidden'}>
      <h1><span>🔧😳</span> This project is under construction <span>😳🔧</span></h1>
      <button onClick={() => (setShow(false))}>X</button>
    </div>
  )
}

export default WIP
