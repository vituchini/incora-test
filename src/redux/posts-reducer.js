import {postsAPI} from "../api/api";
import {reset} from 'redux-form';

const SET_POSTS = 'posts/SET_POSTS'
const TOGGLE_IS_FETCHING = 'posts/TOGGLE_IS_FETCHING'
const ADD_POST = 'posts/ADD_POST'
const SET_CURRENT_POST = 'posts/SET_CURRENT_POST'

let initialState = {
    posts: [],
    isFetching: true,
    currentPost: [],
    comments: []
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        userId: action.data.userId,
                        id: action.data.id,
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
        case SET_CURRENT_POST: {
            return {
                ...state,
                currentPost: state.posts.filter(p => {
                    return p.id == action.postId
                })[0]
            }
        }

        default:
            return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addPostSuccess = (userId, title, body, id) => ({type: ADD_POST, data: {userId, title, body, id}})
export const setCurrentPost = (postId) => ({type: SET_CURRENT_POST, postId})

export const getPosts = (userId, postId = null) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await postsAPI.getPosts(userId)
    dispatch(setPosts(data))
    if (postId) dispatch(setCurrentPost(postId))
    dispatch(toggleIsFetching(false))
}

export const addPost = (userId, title, body) => async (dispatch) => {
    let data = await postsAPI.addPost(userId, title, body)
    dispatch(addPostSuccess(userId, title, body, data.id))
    dispatch(reset('addPostForm'))
}

export default postsReducer

