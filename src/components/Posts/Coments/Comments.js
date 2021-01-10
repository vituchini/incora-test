import React from "react";
import Comment from "./Comment";
import s from "../Posts.module.css"


let Comments = ({...props}) => {

    return (
        <div>
            <div className={s.Posts}>
                {props.comments
                    ? props.comments.map(c => <Comment key={c.id} comment={c}/>)
                    : <div>'No comments yet'</div>}
            </div>

        </div>
    )
}

export default Comments