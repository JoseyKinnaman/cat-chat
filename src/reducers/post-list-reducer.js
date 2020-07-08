export default (state = {}, action) => {
  // let seconds = Date.now();
  const { title, content, author, timestamp, upVotes, downVotes, id } = action;
  switch (action.type) {
    case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        author: author,
        timestamp: timestamp,
        upVotes: upVotes,
        downVotes: downVotes,
        id: id
      }
    });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
      
    case 'UP_VOTE':
      const newPost = {...state };
      const postVote = newPost.filter((post)=>post.upVotes === id)[0];
      const newUpVote = postVote.upVotes +1;
      console.log(newUpVote);
  
      return;
  
    default:
      return state;
    }
  };

  //https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example