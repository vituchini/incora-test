import React from "react";
import User from "./User";


let Users = ({ ...props}) => {
    return (
    <div>
        {props.users.map(u => <User key={u.i} user={u}/>)}
    </div>
    )
}

export default Users