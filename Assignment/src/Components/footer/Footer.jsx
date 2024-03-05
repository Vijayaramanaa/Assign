import React from 'react';
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./footer.scss";

function Footer({active,setActive}) {

  const handleAHome = (btn)=>{
      setActive(btn);
  }

  return (
   <footer>
    <button type='button'  onClick={()=>handleAHome("btn1")} className='iconbtn' style={ {backgroundColor :active == "btn1" ? "#5E5E5E82":"#0F2323"}} ><MdHome className='icon'/></button>
    <button type='button' onClick={()=>handleAHome("btn2")} className='iconbtn' style={{backgroundColor :active == "btn2"? "#5E5E5E82" :"#0F2323"}}><CgProfile className='icon'/></button>
   </footer>
  )
}

export default Footer