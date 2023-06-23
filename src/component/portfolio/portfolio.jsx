import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'



import './portfolio.css'
const portfolio = () => {
  const data=[
    {
      id:1,
      img : img1,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    {
      id:2,
      img : img2,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    {
      id:3,
      img : img3,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    {
      id:4,
      img : img4,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    {
      id:5,
      img : img5,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    {
      id:6,
      img : img6,
      title:"this is a portfllio item title",
      projectName:'GitHub'
    },
    
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      {
        data.map(({img,title,projectName,id})=>{
          return(

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img} alt='' />
          </div>
          <h3>{title}</h3>
         <div className='link'>
         <a href='#' className='btn' >{projectName}</a>
          <a href='#' className='btn btn-primary' target='_blank' >live Demo</a>
         </div>
          
        </article>
      
      
          
          )
        })
      }
      </div>
          </section>
  )
}

export default portfolio