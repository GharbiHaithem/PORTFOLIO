import { modalConstant } from "../action"

const initialState = {
 message:'',
 status:false
}
const modalReducer =(state = initialState , action) =>{
    switch(action.type){
        case modalConstant.MODAL:
            state={
                ...state,
                message:action.payload.message,
                status:action.payload.status                
            }
                                }
      return state

}
export default modalReducer