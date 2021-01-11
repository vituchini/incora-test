import React from "react";
import s from '../Posts.module.css'

let Comment = ({comment}) => {
    let c = comment
    return (
        <div className={s.comment} key={c.id}>
            <div className={s.commentPhotoAndName}>
                <img className={s.userPhoto}
                     src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                     alt="userPhoto"
                />
                <div className={s.userName}>
                    {c.name}
                </div>

            </div>
            <div className={s.postInfo}>
                <div className={s.commentEmail}>
                    email: {c.email}
                </div>
                <div className={s.commentBody}>
                    text: {c.body}
                </div>
            </div>
        </div>
    )
}
export default Comment