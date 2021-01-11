import React, {useState} from "react";
import s from './Posts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {TextArea} from "../common/Form/FormControls";
import {NavLink} from "react-router-dom";

const maxLength30 = maxLengthCreator(30)

let PostDetails = ({...props}) => {

    let p = props.post
    const [isUpdatePostMode, setIsUpdatePostMode] = useState(false);

    let updatePost = (value) => {
        props.updatePost(p.id, p.userId, value.newPostTitle, value.newPostBody)
        setIsUpdatePostMode(false)
    }
    let deletePost = () => {
        props.deletePost(p.id)

    }
    return (
        <div key={p.id} className={s.postDetailsWrapper}>
            <div className={s.photoAndButtons}>
                <div>
                    <img className={s.userPhoto}
                         src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                         alt="userPhoto"
                    />
                </div>

                <div>
                    {isUpdatePostMode
                        ? <div className={s.addPostPopupWrapper}>
                            <div className={s.addPostPopup}>
                                <div className={s.exitButton}>
                                    <button onClick={() => setIsUpdatePostMode(false)}>X</button>
                                </div>
                                <UpdatePostFormRedux onSubmit={updatePost}/>
                            </div>
                        </div>
                        : ''

                    }
                    <div className={s.postDetailsButtons}>
                        <button className={s.updateButton} onClick={() => setIsUpdatePostMode(true)}>Update</button>
                        <NavLink to={`/users/${p.userId}/posts`}>
                            <button onClick={deletePost}>
                                Delete
                            </button>
                        </NavLink>
                    </div>

                </div>
            </div>
            <div className={'postInfo'}>

                <div className={s.titleContent}>
                    {p.title}
                </div>
                <hr/>
                <div className={s.textContent}>
                    {p.body}
                </div>

            </div>
        </div>
    )
}
const UpdatePostForm = (props) => {
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
            <div className={s.updatePostFormButton}>
                <button>UPDATE POST</button>
            </div>
        </form>
    )
}
const UpdatePostFormRedux = reduxForm({form: 'updatePostForm'})(UpdatePostForm)

export default PostDetails