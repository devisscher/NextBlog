const { getPosts, getPost } = require('./getPosts');

test('Should get all posts', () => {
  expect(getPosts()).toBeDefined();
});
