import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false,
    };
  }

  handleClick = () => {
    if(this.state.selectedPost != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action =  a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }
  
  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedPost: null 
    });
  }

  handleDeletePost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleVoteUp = (postToEdit) =>{
    const { dispatch } = this.props;
    const action = a.upVote(postToEdit);
    dispatch(action);
  }

  handleVoteDown = (postToEdit) =>{
    const { dispatch } = this.props;
    const action = a.downVote(postToEdit);
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost} onEditPost= {this.handleEditPostInList}/>
      buttonText = "Return to Message Board"
    } else if (this.state.selectedPost != null){
      currentlyVisibleState =
      <PostDetail
        post = {this.state.selectedPost}
        onClickDelete = {this.handleDeletePost}
        onClickEdit = {this.handleEditClick}
        onClickVoteUp = {this.handleVoteUp}
        onClickVoteDown = {this.handleVoteDown}
      />
      buttonText = "Return to Message Board"
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
      buttonText = "Return to Message Board"
    } else {
      currentlyVisibleState = <PostList postList = {this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost}/>
      buttonText = "Add Post"     
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div class="form-group">
          <button class="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;