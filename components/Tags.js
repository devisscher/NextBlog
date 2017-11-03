import React from 'react';
import Tag from './Tag';

export default ({ tags }) => (
  <div className="tagList">
    {Object.entries(tags).map((tag, index) => (
      <Tag key={index} tag={tag[0]} number={tag[1]} />
    ))}
    <div className="tag tag--dummy" />
  </div>
);
