import { 
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USER,
    DELETE_USER,
    CREATE_USER,
    FETCH_USERS,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from "./actions"

export const fetchUsers = () => {
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch(fetchUsersSuccess(data))
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err))
        })
    }
}

export const updateUser = (payload) => {
    return function(dispatch){
        fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch(updateUserSuccess(data))
        })
        .catch(err => {
            dispatch(updateUserFailure(err))
        })
    }
}

export const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        error
    }
}

export const updateUserSuccess = (payload) => {
    console.log("updateUserSuccess: ", payload);
    return {
        type: UPDATE_USER_SUCCESS,
        payload
    }
}

export const updateUserFailure = (error) => {
    return {
        type: UPDATE_USER_FAILURE,
        error
    }
}