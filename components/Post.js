import React from 'react';
import Link from 'next/link';
import slug from 'speakingurl';
import Router from 'next/router';
import format from 'date-fns/format';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <a
          className="post__link"
          href={`/blog/post/${post.displayNumber}/${slug(post.title)}`}
        >
          <h3
            style={{ paddingBottom: 0, marginBottom: 0 }}
            className="post__title"
          >
            {post.title}
          </h3>
          <small style={{ paddingTop: 0 }}>
            {format(parseFloat(post.date), 'MMM Do, YYYY')}
          </small>
        </a>
      </div>
    );
  }
}
