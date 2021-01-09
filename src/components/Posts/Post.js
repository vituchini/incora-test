import React from "react";
import s from './Posts.module.css'

let Post = ({post}) => {
    let p = post

    let objectToJsx = (obj) => {
        if (obj) return Object.keys(obj).map((x, y) => {
            if (typeof obj[x] === "string") {
                return (
                    <div key={y}>{x} : {obj[x]} </div>
                )
            } else if (typeof obj[x] === "object") {
                return (
                    <div key={y}>{objectToJsx(obj[x])}</div>
                )
            }
            return ''
        })
    }

    return (
        <div key={p.id}>
            <div>
                <img className={s.userPhoto}
                     src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                     alt="userPhoto"
                />
            </div>
            <div className={'postInfo'}>
                {objectToJsx(p)}
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