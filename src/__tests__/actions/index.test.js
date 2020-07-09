import * as actions from './../../actions';

describe('post forum actions', () => {
  it( 'deletePost should create DELETE_POST action', () => {
  expect(actions.deletePost(1)).toEqual({
    type: 'DELETE_POST',
    id: 1
    });
  });

  it( 'toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  })

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({title: 'Cat Post', content: 'this is a post', author: 'catomys', timestamp: 2, upVotes: 1, downVotes: 0, id: 1})).toEqual({type: "ADD_POST", title: 'Cat Post', content: 'this is a post', author: 'catomys', timestamp: 2, upVotes: 1, downVotes: 0, id: 1});
  });
});