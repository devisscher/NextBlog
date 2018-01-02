import React from 'react';
import Project from './Project';

export default ({ projects, type }) => (
  <div className="postList">
    {projects.map(project =>
      <Project key={project.date} project={project} type={type} />)}
  </div>
);
