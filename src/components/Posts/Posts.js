import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../utils/validators/validators";
import {TextArea} from "../common/Form/FormControls";
import s from "./Posts.module.css"

const maxLength30 = maxLengthCreator(30)

let Posts = ({...props}) => {
    let addPost = (value) => {
        props.addPost(props.userId, value.newPostTitle, value.newPostBody)
    }
    return (
        <div>
            <button>Add new</button>
            <AppPostFormRedux onSubmit={addPost}/>
            <div className={s.Posts}>
                {props.posts.map(p => <Post userId={props.userId} key={p.id} post={p}/>)}
            </div>

        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength30]} component={TextArea} name={'newPostTitle'}
                       placeholder={'Type ur title!'}/>
            </div>
            <div>
                <Field validate={[requiredField, maxLength30]} component={TextArea} name={'newPostBody'}
                       placeholder={'Type ur message!'}/>
            </div>
            <div>
                <button>ADD POST</button>
            </div>
        </form>
    )
}
const AppPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default Posts