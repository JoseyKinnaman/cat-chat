export default (state = {}, action) => {
  const { title, content, author, timestamp, id } = action;
  let seconds = Date.now();
  timestamp = new Date(seconds);
  switch (action.type) {
    case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        author: author,
        timestamp: timestamp,
      }
    })
  }
};