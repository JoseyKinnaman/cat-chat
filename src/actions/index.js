export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const {title, content, author, timestamp, upVotes, downVotes,id} = post;
  return {
    type: 'ADD_POST',
    title: title,
    content: content,
    author: author,
    timestamp: timestamp,
    upVotes: upVotes,
    downVotes: downVotes,
    id:id
  }
}

export const upVote = (post) => {
  const { id, title, content, author, timestamp, upVotes, downVotes } = post;
  return {
    type: 'UP_VOTE',
    id: id,
    title: title,
    content: content,
    author: author,
    timestamp: timestamp,
    upVotes: upVotes,
    downVotes: downVotes
  }
}

export const downVote = (post) => {
  const { id, title, content, author, timestamp, upVotes, downVotes } = post;
  return {
    type: 'DOWN_VOTE',
    id: id,
    title: title,
    content: content,
    author: author,
    timestamp: timestamp,
    upVotes: upVotes,
    downVotes: downVotes
  }
}