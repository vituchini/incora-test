import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    },
);


export const usersAPI = {
    getUsers() {
        return instance.get(`users/`)
            .then(res => {
                return res.data
            })
    },

}

export const postsAPI = {
    getPosts(userId) {
        return instance.get(`posts?userId=${userId}`)
            .then(res => {
                return res.data
            })
    },
    addPost(userId, title, body) {
        return instance.post(`posts`,
            {
                userId,
                title,
                body
            }
        ).then(res => {
            return res.data
        })
    },
    getComments(postId) {
        return instance.get(`comments?postId=${postId}`)
            .then(res => {
                return res.data
            })
    },
    updatePost(id, userId, title, body) {
        return instance.put(`posts/${id}`,
            {
                id,
                userId,
                title,
                body
            }
        ).then(res => {
            return res.data
        })
    },
    deletePost(postId) {
        instance.delete(`posts/${postId}`)
    },
}