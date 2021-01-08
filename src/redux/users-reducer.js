import {usersAPI} from "../api/api";

const SET_USERS = 'users/SET_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers()
    dispatch(setUsers(data))
    dispatch(toggleIsFetching(false))

}

export default usersReducer

