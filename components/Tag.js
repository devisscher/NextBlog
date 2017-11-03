import React from 'react';
import Link from 'next/link';
import slug from 'speakingurl';
import Router from 'next/router';
import format from 'date-fns/format';

export default class Tag extends React.Component {
  render() {
    const { tag, number } = this.props;
    return (
      <div>
        <a className="tag__link" href={`/tags/${tag.toLowerCase()}`}>
          <h3
            style={{ paddingBottom: 0, marginBottom: 0 }}
            className="post__name"
          >
            {tag} ({number})
          </h3>
        </a>
      </div>
    );
  }
}
