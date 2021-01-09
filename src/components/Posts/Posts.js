import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../utils/validators/validators";
import {TextArea} from "../common/Form/FormControls";

const maxLength30 = maxLengthCreator(30)

let Posts = ({...props}) => {
    let addPost = (value) => {
        props.addPost(value.newPostBody)
    }
    return (
        <div>
            <button>Add new</button>
            <AppPostFormRedux onSubmit={addPost}/>
            {props.posts.map(p => <Post key={p.id} post={p}/>)}
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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