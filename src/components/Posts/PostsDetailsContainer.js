import React from "react";
import {connect} from "react-redux";
import {
    deletePost,
    getPosts, updatePost,
} from "../../redux/posts-reducer";
import Preloader from '../common/Preloader/Preloader'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import PostDetails from "./PostDetails";
import Comments from "./Coments/Comments";
import s from './Posts.module.css'

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
                    <PostDetails updatePost={this.props.updatePost}
                                 post={this.props.currentPost}
                                 deletePost={this.props.deletePost}/>
                    <div className={s.comments}>
                        <Comments comments={this.props.comments}/>
                    </div>
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
            updatePost,
            deletePost
        }
    ), withRouter
)
(PostsDetailsContainer)