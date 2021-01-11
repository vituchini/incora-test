import React from "react";
import s from './Posts.module.css'
import {NavLink} from "react-router-dom";

let Post = ({post, userId}) => {
    let p = post

    return (
        <div className={s.postDetailsWrapper}>

            <div className={s.photoAndButtons}>

                <div>
                    <img className={s.userPhoto}
                         src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                         alt="userPhoto"
                    />
                </div>
                <div className={s.postDetailsButton}>
                    <NavLink to={`/users/${userId}/posts/` + p.id}>
                        <button>
                            Details
                        </button>
                    </NavLink>
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
export default Post