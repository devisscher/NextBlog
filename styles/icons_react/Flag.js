import React from 'react';

export default function Flag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v8h1v-8h-1zm2 0v4h2v1h4l-2-1.97 2-2.03h-3v-1h-3z" />
    </svg>
  );
}
