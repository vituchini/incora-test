import React from "react";
import Comment from "./Comment";
import s from "../Posts.module.css"
import {isEmptyObject} from "../../../utils/object-helpers";


let Comments = ({...props}) => {

    return (
        <div className={s.comments}>
            <div className={s.commentsTitle}>COMMENTS:</div>
            <hr/>
            {!isEmptyObject(props.comments)
                ? props.comments.map(c => <Comment key={c.id} comment={c}/>)
                : <div>'No comments yet...'</div>}
        </div>
    )
}

export default Comments