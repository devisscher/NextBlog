import React from 'react';
import Link from 'next/link';
import slug from 'speakingurl';
import Router from 'next/router';
import format from 'date-fns/format';

export default class Project extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <a className="project__link" href={`/projects/${slug(project.title)}`}>
          <h3
            style={{ paddingBottom: 0, marginBottom: 0 }}
            className="project__title"
          >
            {project.title}
          </h3>
          <small style={{ paddingTop: 0 }}>
            {format(parseFloat(project.date), 'MMM Do, YYYY')}
          </small>
        </a>
      </div>
    );
  }
}
