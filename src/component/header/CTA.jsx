import React from 'react'
import CV from '../../assets/receipt-pdf.pdf'
import './header.css'
const CTA = () => {
  return (
    <div className='cta'>
<a href={CV} download className='btn'>Download CV</a>
<a href='#cantact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA