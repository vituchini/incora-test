import {postsAPI} from "../api/api";

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
            if (action.newPost) return {
                ...state,
                currentPosts: [...state.currentPosts,
                    {
                        id: state.currentPosts.length + 1,
                        message: action.newPost,
                        likesCount: Math.floor(Math.random() * Math.floor(100))
                    }],

            }
            break
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

export const setPosts= (posts) => ({type: SET_POSTS, posts})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addPost = (newPost) => ({type: ADD_POST, newPost})

export const getPosts = (userId) => async (dispatch) => {
    debugger
    dispatch(toggleIsFetching(true))
    let data = await postsAPI.getPosts(userId)
    dispatch(setPosts(data))
    dispatch(toggleIsFetching(false))

}

export default postsReducer

