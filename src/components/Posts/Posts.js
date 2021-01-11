import React, {useState} from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../utils/validators/validators";
import {TextArea} from "../common/Form/FormControls";
import s from "./Posts.module.css"

const maxLength30 = maxLengthCreator(30)

let Posts = ({...props}) => {

    const [isAddPostMode, setIsAddPostMode] = useState(false);

    let addPost = (value) => {
        props.addPost(props.userId, value.newPostTitle, value.newPostBody)
        setIsAddPostMode(false)
    }
    return (
        <div>

            {isAddPostMode
                ? <div className={s.addPostPopupWrapper}>
                    <div className={s.addPostPopup}>

                        <div className={s.exitButton}>
                            <button onClick={() => setIsAddPostMode(false)}>X</button>
                        </div>
                        <div className={s.addPostForms}>
                            <AddPostFormRedux onSubmit={addPost}/>
                        </div>

                    </div>
                </div>
                : <div className={s.addNewPostButton}>
                    <button onClick={() => setIsAddPostMode(true)}>Add new</button>
                </div>

            }

            <div className={s.posts}>
                {props.posts.map(p => <Post user={props.user} userId={props.userId} key={p.id} post={p}/>)}
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
            <div className={s.addPostFormButton}>
                <button>ADD POST</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default Posts