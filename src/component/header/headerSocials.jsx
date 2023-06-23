import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import{TfiDribbble} from 'react-icons/tfi';
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://lindendin.com' target="_blank"><BsLinkedin/></a>
        <a href='http://github.com' target="_blank"><FaGithub/></a>
        <a href='http://dribbble.com' target="_blank"><TfiDribbble/></a>
        
    </div>
  )
}

export default headerSocials