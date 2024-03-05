import React, { useState } from 'react';
import Gp46 from "../../assets/Group46.png";
import logo from "../../assets/moptro.png";
import "./header.scss"

function Header() {
    const [count,setCount] = useState(4)
  return (
    <header className='hdr'>
        <img className='contact' src={Gp46} />
        <div className='head'>
            <img src={logo} className='logo'/>
            <h2>{count}</h2>
        </div>
    </header>
  )
}

export default Header