import React, { useState } from 'react'
import './style.css'
import { GiSettingsKnobs } from "react-icons/gi";
import b from '../../assets/brick-texture-png-23886.png'
import b1 from '../../assets/bg-texture.png'

const Settings = ({setImgSrc,imgSrc}) => {
  const[hovered,setHovered] = useState(false)
  return (
    <>
    
    <div className='cursor-pointer settings bg-[rgba(0, 0, 0, 0.3)] p-4 w-[max-content] block backdrop-blur-lg z-50 fixed right-[15px] rounded-xl bottom-3' onClick={()=>setHovered(true)} >  <GiSettingsKnobs className='x' style={{fontSize:'30px' , fontWeight:'900'}} />
  
    </div>
     {hovered && <div style={{display:'flex' ,flexDirection:'column', gap:'10px'}} onMouseLeave={()=>setHovered(false)} className={`${hovered ? 'settings-menu-hovered' : 'settings-menu'}  `}>
    <div onClick={()=>setImgSrc(b)} className={`${imgSrc===b ? 'text-blue-300' : 'text-white'} cursor-pointer flex items-center w-full`}  style={{display:'flex !important' ,flexDirection:'row !important', gap:'10px'}}>
   
        Background 1
    
    </div>
    <div onClick={()=>setImgSrc(b1)}  className={`${imgSrc===b1 ? 'text-blue-300' : 'text-white'} cursor-pointer flex items-center w-full`}  style={{display:'flex !important' ,flexDirection:'row !important', gap:'10px'}}>
   
    Background 2

</div>
      </div>
      
      }

    </>
  )
}

export default Settings