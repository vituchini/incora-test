import React from "react";
import s from './Posts.module.css'

let Post = ({post}) => {
    let p = post

    return (
        <div key={p.id}>
            <div>
                <img className={s.userPhoto}
                     src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                     alt="userPhoto"
                />
            </div>
            <div className={'postInfo'}>
                title : {p.title} <br/>
                text : {p.body}
            </div>
            <div>
                <button>
                    Details
                </button>
            </div>
        </div>
    )
}
export default Post