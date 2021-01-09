import React from "react";
import {connect} from "react-redux";
import {
    addPost,
    getPosts,
} from "../../redux/posts-reducer";
import Posts from "./Posts";
import Preloader from '../common/Preloader/Preloader'
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class PostsContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (userId) this.props.getPosts(userId)
    }

    render() {
        return <>
            {this.props.isPostsLoading
                ? <Preloader/>
                : <Posts {...this.props}/>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.currentPosts,
        isPostsLoading: state.postsPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addPost,
            getPosts,
        }
    ), withRouter
)
(PostsContainer)