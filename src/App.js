
import './App.css';
import Headers  from './component/header/header.jsx';
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Services from './component/services/services'
import Portfolio from './component/portfolio/portfolio'
import Testimonials from './component/testimonials/testimonials';

import Footer from './component/footer/footer'
import Cantact from './component/cantact/cantact';
import { useSelector } from 'react-redux';
import Modal from './component/Modal';
import Settings from './component/Settings/index.jsx';
import { useEffect, useState } from 'react';

function App() {
  const {modal} = useSelector(state=>state)
  const[imgSrc,setImgSrc]=useState('')
  useEffect(()=>{
    document.body.style.backgroundImage=`url(${imgSrc})`
  },[imgSrc])
  return (
    <>
    {
      modal.status && <Modal/>
    }
    <Headers/> 
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio />
    <Testimonials/>
    <Cantact />
    <Footer />
  <Settings  imgSrc={imgSrc} setImgSrc={setImgSrc} />
    </>
  );
}

export default App;
