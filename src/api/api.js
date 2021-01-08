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

}