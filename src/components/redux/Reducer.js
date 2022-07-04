import { ADD_EMAIL, CHANGE_BOOL, SET_BOOL } from "./Action-type";
const initialState = {email:[],Bool:false}
const emailReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_EMAIL:
            console.log("++++",action)
            return {...state,email:action.data}
        case SET_BOOL:
            return {...state,Bool:true}
        case CHANGE_BOOL:
            return {...state, Bool:false}
        default:
            return state
    }
}
export default emailReducer;