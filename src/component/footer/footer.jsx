import React from 'react'
import './footer.css';
import{FaFacebookSquare} from 'react-icons/fa'
import{RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
    <footer >
     <a href='#' className='footer__logo'>EGATOR</a>
     <ul className='permalinks'>
       <li><a href='#' >Home</a></li>
       <li><a href='#' >About</a></li>
       <li><a href='#' >Experience</a></li>
       <li><a href='#' >Services</a></li>
       <li><a href='#' >Portfollio</a></li>
       <li><a href='#' >Testimonials</a></li>
       <li><a href='#' >Cantact</a></li>
       
     </ul>
     <div className='footer__socials'>
       <a href='https://facebook.com'><FaFacebookSquare/></a>
       <a href='https://instagram.com'><RiInstagramFill/></a>
       <a href='https://twitter.com'><BsTwitter/></a>
     </div>
     <div className='footer__copyRight'>
    <small>&copy;  EAGATOR Tutorials . All rights reserved</small>
     </div>
    </footer>
  )
}

export default footer