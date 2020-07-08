export default (state = {}, action) => {
  // let seconds = Date.now();
  const { title, content, author, timestamp, id } = action;
  switch (action.type) {
    case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        author: author,
        timestamp: timestamp
      }
    });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};