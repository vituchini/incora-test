import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {objectToJsx} from "../../utils/object-helpers";

let User = ({user}) => {
    let u = user


    return (
        <div className={s.user} key={u.id}>
            <div>
                <img className={s.userPhoto}
                     src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                     alt="userPhoto"
                />
            </div>
            <div className={'usersInfo'}>
                {objectToJsx(u)}
            </div>
            <div>
                <NavLink to={`/users/${u.id}/posts`}>
                    <button>Posts</button>
                </NavLink>
            </div>
        </div>
    )
}
export default User