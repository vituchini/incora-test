import {postsAPI} from "../api/api";
import {reset} from 'redux-form';

const SET_POSTS = 'posts/SET_POSTS'
const TOGGLE_IS_FETCHING = 'posts/TOGGLE_IS_FETCHING'
const ADD_POST = 'posts/ADD_POST'
let initialState = {
    currentPosts: [],
    isFetching: true,
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POSTS: {
            return {
                ...state,
                currentPosts: [...action.posts]
            }
        }
        case ADD_POST: {
            return {
                ...state,
                currentPosts: [...state.currentPosts,
                    {
                        userId: action.data.userId,
                        id: state.currentPosts.length + 1,
                        title: action.data.title,
                        body: action.data.body,
                    }],

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

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addPostSuccess = (userId, title, body) => ({type: ADD_POST, data: {userId, title, body}})

export const getPosts = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await postsAPI.getPosts(userId)
    dispatch(setPosts(data))
    dispatch(toggleIsFetching(false))
}

export const addPost = (userId, title, body) => async (dispatch) => {
    await postsAPI.addPost(userId, title, body)
    console.log(userId, title, body)
    dispatch(addPostSuccess(userId, title, body))
    dispatch(reset('addPostForm'))
}

export default postsReducer

