import { ADD_EMAIL, CHANGE_BOOL, SET_BOOL } from "./Action-type"
export const Addemail = (data)=>{
    console.log("in action",data)
    return {
        type: ADD_EMAIL,
        data,
    }
}
export const setBoolval = ()=>{
    return {
        type: SET_BOOL,

    }
}
export const CloseDiv = ()=>{
    return {
        type : CHANGE_BOOL,
    }
}