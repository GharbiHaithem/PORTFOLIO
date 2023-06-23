import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './cantact.css';
import {TfiEmail} from 'react-icons/tfi'
import{BsMessenger} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { modalConstant } from '../../redux/action';


 const Cantact = () => {
  const form = useRef();
 const dispatch=useDispatch()

       
  
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_oz9ookf', 'template_ucebdrv', form.current, 'KGSW8sASR5-Dr64tp')
      .then((result) => {
          console.log(result.text);
         dispatch({type:modalConstant.MODAL,payload:{message:'Email sent success',status:true}})
      }, (error) => {
          console.log(error.text);
      });
     e.target.reset()
  }
  return (
        <section id='cantact'>
          
             <h5>Get In Touch</h5>
             <h2>Cantact</h2>
             <div className='container container__cantact'>
                <div className='cantact__options'>
                    <article className='cantact__option'>
                      <TfiEmail className='cantact_icon'/>
                     <h4>Email</h4>
                     <h5>gharbi.haythem1988@gmail.com</h5>
                     <a href='mailto:gharbi.haythem1988@gmail.com' target='_blanc'>Send an Email</a>
                    </article>
                    <article className='cantact__option'>
                      <BsMessenger className='cantact_icon'/>
                     <h4>messenger</h4>
                   
                     <a href='https://m.me/haithem.pazzo' target='_blanc'>Send an Message</a>
                    </article>
                    <article className='cantact__option'>
                     <h4>WhatssApp</h4>
                     <h5>+22013583</h5>
                     <a href='https://api.whatsapp.com/send?phone=+21622013583' target='_blanc'>Send an Email</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <input type='text' name='fullname' placeholder='Enterr Full name ...' required/>
                  <input type='email' required name='email' placeholder='Enter Email ...' onChange={(e)=>setEmail(e.target.value)} />
                  <textarea name='message' required placeholder='yur message'> </textarea>
                  <button type='submit' className='btn btn-primary'>Send a message</button>
                </form>
             </div>  
        </section>
    )
}

export default Cantact
