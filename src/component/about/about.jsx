import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1 style={{justifyContent:'center'}}>About Me</h1>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about-cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux d</p>
         <a href='#cantact' className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
