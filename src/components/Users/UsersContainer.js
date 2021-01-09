import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return <>
            {this.props.isUsersLoading
                ? <Preloader/>
                : <Users {...this.props}/>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {

        users: state.usersPage.users,
        isUsersLoading: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        getUsers,
    }
)
(UsersContainer)