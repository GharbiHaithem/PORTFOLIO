import React from 'react'
import { modalConstant } from '../../redux/action'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
const Modal = () => {
    const {modal} = useSelector(state=>state)
    const dispatch = useDispatch()
    return (
        <div className='modalMessage'>
             <form>
             <div className='status_header ' >
            
              
          
           
            <h5 > SUCCESS SENDING </h5>  
            <span style={{ cursor: 'pointer',color:'white', fontSize: '2rem',transform:'translateY(-15px)' }} onClick={()=>dispatch({type:modalConstant.MODAL,payload:{status:false,message:''}})} >&times;</span>
            </div>
          <hr/>
          <div className='text-center text-light' style={{fontSize:'40px',fontWeight:'400'}}>
          <span className='message'>{modal.message&& modal.message}</span>
          </div>
            </form>
        </div>
    )
}

export default Modal
