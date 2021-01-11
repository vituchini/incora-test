import {postsAPI, usersAPI} from "../api/api";
import {reset} from 'redux-form';
import {isEmptyObject} from "../utils/object-helpers";

const SET_POSTS = 'posts/SET_POSTS'
const TOGGLE_IS_FETCHING = 'posts/TOGGLE_IS_FETCHING'
const ADD_POST = 'posts/ADD_POST'
const UPDATE_POST = 'posts/UPDATE_POST'
const SET_CURRENT_POST = 'posts/SET_CURRENT_POST'
const SET_COMMENTS = 'posts/SET_COMMENTS'
const GET_CURRENT_USER = 'posts/GET_CURRENT_USER'


let initialState = {
    posts: [],
    isFetching: true,
    currentPost: [],
    comments: [],
    currentUser: []
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        case SET_COMMENTS: {
            return {
                ...state,
                comments: [...action.comments]
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
            let filteredPosts = state.posts.filter(p => {
                return p.id == action.postId
            })
            return {

                ...state,
                currentPost: isEmptyObject(filteredPosts)
                    ? {
                        userId: action.userId,
                        title: 'The post is not Exist',
                        body: 'The post is not Exist'
                    }
                    : filteredPosts[0]
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                currentPost: {...action.updatedPost, userId: action.userId}
            }
        }
        case GET_CURRENT_USER: {
            return {
                ...state,
                currentUser: !isEmptyObject(action.userData)
                    ? action.userData[0]
                    : {
                        name: 'Noname',
                        username: 'NoUsername'
                    }
            }
        }

        default:
            return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setComments = (comments) => ({type: SET_COMMENTS, comments})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addPostSuccess = (userId, title, body, id) => ({type: ADD_POST, data: {userId, title, body, id}})
export const updatePostSuccess = (updatedPost, userId) => ({type: UPDATE_POST, updatedPost, userId})
export const setCurrentPost = (postId, userId) => ({type: SET_CURRENT_POST, postId, userId})
export const getCurrentUserSuccess = (userData) => ({type: GET_CURRENT_USER, userData})

export const getPosts = (userId, postId = null) => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    let data = await postsAPI.getPosts(userId)
    dispatch(setPosts(data))

    if (postId) {
        dispatch(setCurrentPost(postId, userId))
        await dispatch(getComments(postId))
    }
    dispatch(toggleIsFetching(false))
}

export const getComments = (postId) => async (dispatch) => {
    let data = await postsAPI.getComments(postId)
    dispatch(setComments(data))
}
export const getCurrentUser = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers()
    dispatch(getCurrentUserSuccess(data.filter(u => u.id == userId)))
    dispatch(toggleIsFetching(false))
}

export const addPost = (userId, title, body) => async (dispatch) => {
    let data = await postsAPI.addPost(userId, title, body)
    dispatch(addPostSuccess(userId, title, body, data.id))
    dispatch(reset('addPostForm'))
}

export const updatePost = (id, userId, title, body) => async (dispatch) => {
    let data = await postsAPI.updatePost(id, userId, title, body)
    dispatch(updatePostSuccess(data, userId))

}

export const deletePost = (postId) => async (dispatch) => {
    await postsAPI.deletePost(postId)
}

export default postsReducer

