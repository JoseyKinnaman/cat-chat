import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }
  
  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, content, author, timestamp, upVotes, downVotes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      author: author,
      timestamp: timestamp,
      upVotes: upVotes,
      downVotes: downVotes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, content, author, timestamp, upVotes, downVotes } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      author: author,
      timestamp: timestamp,
      upVotes: upVotes,
      downVotes: downVotes
    }
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedPost: null 
    });
  }

  handleDeletePost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleThumbsUp = (id) =>{
    const {dispatch } = this.props;
    const action = {
      type: 'UP_VOTE',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
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
        onClickThumbsUp = {this.handleThumbsUp}
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