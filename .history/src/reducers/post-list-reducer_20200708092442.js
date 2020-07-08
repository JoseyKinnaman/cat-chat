export default (state = {}, action) => {
  let seconds = Date.now();
  let timestamp = new Date(seconds);
  const { title, content, author, timestamp, id } = action;
  switch (action.type) {
    case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        author: author,
        timestamp: timestamp,
      }
    });
  }
};