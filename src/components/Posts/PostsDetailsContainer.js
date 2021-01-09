import React from "react";
import {connect} from "react-redux";
import {
    getPosts,
} from "../../redux/posts-reducer";
import Preloader from '../common/Preloader/Preloader'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import PostDetails from "./PostDetails";

class PostsDetailsContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        let postId = this.props.match.params.postId
        this.props.getPosts(userId,postId)
    }

    render() {
        return <>
            {this.props.isPostsLoading
                ? <Preloader/>
                : <PostDetails post={this.props.currentPost}/>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        currentPost:state.postsPage.currentPost,
        isPostsLoading: state.postsPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getPosts,
        }
    ), withRouter
)
(PostsDetailsContainer)