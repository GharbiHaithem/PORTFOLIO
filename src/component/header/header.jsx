import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/gharbi.png'
import HeaderSocials from './headerSocials'
const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm </h5>
                <h1>Haithem Gharbi</h1>
                <h5 className='text-light'>FullStack Developer</h5>
                <CTA/>
                <HeaderSocials/>
              <div className='container-me'>
              <div className='me'>
                    <img src={ME} alt='me' style={{height:'350px'}} />
                </div>
              </div>
                <a href='#cantact' className='scroll__down'>Scroll Down</a> 
            </div>

        </header>
    )
}

export default Header
