import React from 'react';
import Post from './Post';

export default ({ posts }) => (
  <div className="postList">
    {posts.map(post => <Post key={post.number} post={post} />)}
    <div className="post post--dummy" />
  </div>
);
