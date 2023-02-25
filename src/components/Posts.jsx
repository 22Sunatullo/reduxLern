import React from "react";
import {connect} from 'react-redux';
import Post from "./Post";

const Posts = ({synsPost}) => {
    if (!synsPost.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return  synsPost.map(post => <Post post={post} key={post.id} />)
}
const mapStateToProps = state => {
    return {
        synsPost: state.post.post
    }
}

export default connect(mapStateToProps, null)(Posts);