import React from "react";
import s from '../Posts.module.css'
import {objectToJsx} from "../../../utils/object-helpers";

let Comment = ({comment}) => {
    let c = comment
    return (
        <div key={c.id}>
            <div>
                <img className={s.userPhoto}
                     src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                     alt="userPhoto"
                />
            </div>
            <div className={'postInfo'}>
                {objectToJsx(c)}
            </div>
        </div>
    )
}
export default Comment