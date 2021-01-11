import React from "react";
import User from "./User";
import s from './Users.module.css'

let Users = ({...props}) => {
   return (
        <div className={s.Users}>
            {props.users.map(u => {
                    return <User key={u.id} user={u}/>
                }
            )}
        </div>
    )
}

export default Users