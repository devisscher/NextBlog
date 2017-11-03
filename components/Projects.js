import React from 'react';
import Project from './Project';

export default ({ projects }) => (
  <div className="postList">
    {projects.map(project => <Project key={project.date} project={project} />)}
    <div className="project project--dummy" />
  </div>
);
