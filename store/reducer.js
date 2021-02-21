import { FETCH_USERS, UPDATE_USER, DELETE_USER, CREATE_USER, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from "../actions/actions.js"

const initialState = {
    users: [],
    error: null,
    name: [],
    isLoading: true
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            console.log("users: ",action.payload);
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case UPDATE_USER_SUCCESS:
            let users = state.users.slice()
            
            users.forEach((item,index) => {
                if(item.id == action.payload.id){
                    users.splice(index, 1, action.payload)
                    return users
                }
            })
            console.log("users after update: ", users);
            return {
                ...state,
                users,
                isLoading: false
            }
        default:
            return state
            

    }
}