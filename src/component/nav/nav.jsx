import React,{useState} from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{SiAboutdotme} from 'react-icons/si';
import{AiOutlineUser} from 'react-icons/ai';
import{BiBook} from 'react-icons/bi';
import{RiServiceLine} from 'react-icons/ri';
import{FiMessageSquare} from 'react-icons/fi';

const Nav = () => {
  const[activeNav,setActiveNav]= useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href='#cantact' onClick={()=>setActiveNav('#cantact')} className={activeNav==='#cantact' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : '' } ><BiBook/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==="#services" ? "active" : ''} ><RiServiceLine/></a>
      <a href='#testimonials'><FiMessageSquare/></a>
      
    </nav>
  )
}

export default Nav