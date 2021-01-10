import React from "react";
import {connect} from "react-redux";
import {
    getPosts,
} from "../../redux/posts-reducer";
import Preloader from '../common/Preloader/Preloader'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import PostDetails from "./PostDetails";
import Comments from "./Coments/Comments";

class PostsDetailsContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        let postId = this.props.match.params.postId
        this.props.getPosts(userId, postId)
    }

    render() {
        return <>
            {this.props.isPostsLoading
                ? <Preloader/>
                : <div>
                    <PostDetails post={this.props.currentPost}/>
                    <Comments comments={this.props.comments}/>
                </div>
            }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        currentPost: state.postsPage.currentPost,
        comments: state.postsPage.comments,
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