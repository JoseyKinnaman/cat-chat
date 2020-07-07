import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  test('Should return a default state if there is no action passed into the reducer', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });
});