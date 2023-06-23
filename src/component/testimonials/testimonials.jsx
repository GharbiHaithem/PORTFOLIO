import React from 'react'
import './testimonials.css';
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'
import avt4 from '../../assets/avatar4.jpg'

import './testimonials.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = () => {
  const data=[
    {
      image:avt1,
      name:'Laminos jarguin',
      review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. res' 
    },
    {
      image:avt2,
      name:'gharbiouch',
      review: 'ugiat! Culpa temporibus, accusantium quos nesciunt alias maiores fugit.'
    },
    {
      image:avt3,
      name:'amira Zgued',
      review:'Lorem ipsum dolor, sit ametihicum similique poribus provident! '
     },
    {
      image:avt4,
      name:'amardon galxasy',
      review:'Lorem ipsum dolor, sit amet consece ab dolorum asperiores, !'
    },
  

  ]
  return (
    <section id='testimonials'>
      <h5>Reviews from clients </h5>
      <h2>Testominials</h2>
      <Swiper className='container testominials__container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
     
       pagination={{ clickable: true }}>
       {
        data.map(({image,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testminials'
           
         >
          <div className='client__avatar'>
            <img src={image} alt='' />
          </div>
          <div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </div>
        </SwiperSlide>
          )
        })
       } 
       
      </Swiper>
    </section>
  )
}

export default testimonials