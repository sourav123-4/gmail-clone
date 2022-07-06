import {
    ADD_EMAIL,
    DELETE_EMAIL,
    CHECKBOX_ALL,
    CHANGE_BOOL,
    SET_BOOL,
    DELETE_ALL_EMAIL,
    SEARCH_VAL,
    STARRED_REMOVE_EMAIL,
    FILTERED_EMAIL,
    STARRED_EMAIL,
    STAR_BOOL_VAL,
    STAR_BOOL_VAL_REV
} from "./Action-type"
export const Addemail = (data) => {
    console.log("in action", data)
    return {
        type: ADD_EMAIL,
        data,
    }
}
export const setBoolval = () => {
    return {
        type: SET_BOOL,

    }
}
export const CloseDiv = () => {
    return {
        type: CHANGE_BOOL,
    }
}
export const deleteEmail = (data) => {
    return {
        type: DELETE_EMAIL,
        data,
    }
}
export const deleteAllEmail = () => {
    return {
        type: DELETE_ALL_EMAIL,
    }
}
export const searchval = (data) => {
    return {
        type: SEARCH_VAL,
        data
    }
}
export const filteredEmail = (data) => {
    return {
        type: FILTERED_EMAIL,
        data,
    }
}
export const starredEmail = (data) => {
    return {
        type: STARRED_EMAIL,
        data
    }
}
export const starredEmailRemove = (data) => {
    return {
        type: STARRED_REMOVE_EMAIL,
        data
    }
}
export const checkboxCheck = (data) => {
    return {
        type: CHECKBOX_ALL,
        data
    }
}
export const changestarboolval = () => {
    return {
        type: STAR_BOOL_VAL,
    }
}
export const reversestarboolval = ()=>{
    return {
        type: STAR_BOOL_VAL_REV
    }
}