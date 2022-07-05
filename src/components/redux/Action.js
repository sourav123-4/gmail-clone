import { ADD_EMAIL,DELETE_EMAIL, CHANGE_BOOL, SET_BOOL, DELETE_ALL_EMAIL, SEARCH_VAL } from "./Action-type"
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
export const deleteEmail = (data)=>{
    return {
        type : DELETE_EMAIL,
        data,
    }
}
export const deleteAllEmail = ()=>{
    return {
        type: DELETE_ALL_EMAIL,
    }
}
export const searchval = (data)=>{
    return {
        type: SEARCH_VAL,
        data
    }
}