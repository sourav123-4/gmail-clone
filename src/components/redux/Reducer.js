import {
    ADD_EMAIL,
    CHANGE_BOOL,
    DELETE_ALL_EMAIL,
    DELETE_EMAIL,
    SEARCH_VAL,
    SET_BOOL,
    FILTERED_EMAIL,
    STARRED_EMAIL,
    STARRED_REMOVE_EMAIL,
    CHECKBOX_ALL,
    STAR_BOOL_VAL,
    STAR_BOOL_VAL_REV
} from "./Action-type";
const initialState = {
    email: [],
    checkBool: false,
    filteredEmail: [],
    Bool: false,
    searchval: "",
    starredEmail: [],
    starboolval:false,
}
const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMAIL:
            console.log("++++", action)
            return { ...state, email: [...state.email, action.data] }
        case DELETE_EMAIL:
            const newList = state?.email?.filter(elem => elem !== action.data)
            return {
                ...state,
                email: newList
            }
        case FILTERED_EMAIL:
            const newEmail = state?.email?.filter(elem => elem.subject.toLowerCase().includes(action.data.toLowerCase()))
            return {
                ...state,
                filteredEmail: newEmail
            }
        case STARRED_EMAIL:
            return {
                ...state,
                starredEmail: [...state.starredEmail, action.data]
            }
        case STARRED_REMOVE_EMAIL:
            const newList1 = state?.starredEmail?.filter(elem => elem !== action.data)
            return {
                ...state,
                starredEmail: newList1
            }
        case STAR_BOOL_VAL:
            return{
                ...state,starboolval:true
            }
        case STAR_BOOL_VAL_REV:
            return {
                ...state,starboolval:false
            }
        case DELETE_ALL_EMAIL:
            return { ...state, email: [] }
        case SET_BOOL:
            return { ...state, Bool: true }
        case CHANGE_BOOL:
            return { ...state, Bool: false }
        case SEARCH_VAL:
            return { ...state, searchval: action.data }
        case CHECKBOX_ALL:
            return { ...state, checkBool: action.data }
        default:
            return state
    }
}
export default emailReducer;