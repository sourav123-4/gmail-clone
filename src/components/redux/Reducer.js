import { ADD_EMAIL, CHANGE_BOOL, DELETE_ALL_EMAIL, DELETE_EMAIL, SEARCH_VAL, SET_BOOL } from "./Action-type";
const initialState = {email:[],Bool:false,searchval:""}
const emailReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_EMAIL:
            console.log("++++",action)
            return {...state,email:[...state.email,action.data]}
        case DELETE_EMAIL:
            const newList=state?.email?.filter(elem => elem !== action.data)
            return{
                ...state,
                email:newList
            }  
        case DELETE_ALL_EMAIL:
            return {...state,email:[]}
        case SET_BOOL:
            return {...state,Bool:true}
        case CHANGE_BOOL:
            return {...state, Bool:false}
        case SEARCH_VAL:
            return {...state,searchval:action.data}
        default:
            return state
    }
}
export default emailReducer;