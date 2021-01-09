import React from "react";
import User from "./User";


let Users = ({...props}) => {
   return (
        <div>
            {props.users.map(u => {
                    return <User key={u.id} user={u}/>
                }
            )}
        </div>
    )
}

export default Users