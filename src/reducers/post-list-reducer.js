import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, content, author, timestamp, upVotes, downVotes, id } = action;
  switch (action.type) {
    case c.ADD_POST:
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
      return Object.assign({}, state, {
        [id]: {
          title: title,
          content: content,
          author: author,
          timestamp: timestamp,
          upVotes: upVotes + 1,
          downVotes: downVotes,
          id: id
        }
      });

    case 'DOWN_VOTE':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          content: content,
          author: author,
          timestamp: timestamp,
          upVotes: upVotes,
          downVotes: downVotes + 1,
          id: id
        }
      });

    default:
      return state;
    }
  };