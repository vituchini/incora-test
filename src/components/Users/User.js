import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

let User = ({user}) => {
    let u = user

    return (
        <div className={s.user} key={u.id}>
            <div className={s.userTop}>
                <div className={s.photoAndUserName}>
                    <img className={s.userPhoto}
                         src={"https://prm.ua/wp-content/uploads/2019/02/50766681_285739525440896_2458080093832029354_n.jpg"}
                         alt="userPhoto"
                    />
                    <div className={s.userNameInfo}>
                        <div className={s.userUserName}>
                            {u.username}
                        </div>
                        <div className={s.userName}>
                            &#60;{u.name}&#62;
                        </div>
                    </div>
                </div>
                <div className={s.postsButton}>
                    <NavLink to={`/users/${u.id}/posts`}>
                        <button>Posts</button>
                    </NavLink>
                </div>
            </div>

            <div className={'usersInfo'}>

                <div>
                    email : {u.email}
                </div>
                <div className={s.address}>
                    address info:
                    <div>
                        street : {u.address.street}
                    </div>
                    <div>
                        suite : {u.address.suite}
                    </div>

                    <div>
                        city : {u.address.city}
                    </div>
                    <div>
                        zipcode : {u.address.zipcode}
                    </div>

                    <div className={s.geo}>
                        geo info:
                        <div>
                            lat : {u.address.geo.lat}
                        </div>
                        <div>
                            lng : {u.address.geo.lng}
                        </div>

                    </div>
                </div>
                <div>
                    phone : {u.phone}
                </div>
                <div>
                    website : {u.website}
                </div>
                <div className={s.company}>
                    company info:
                    <div>
                        company name : {u.company.name}
                    </div>
                    <div>
                        catchPhrase : {u.company.catchPhrase}
                    </div>
                    <div>
                        bs : {u.company.bs}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default User