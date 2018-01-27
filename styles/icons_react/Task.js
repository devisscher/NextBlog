import React from 'react';

export default function Task(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v7h7v-3.59l-1 1v1.59h-5v-5h3.59l1-1h-5.59zm7 0l-3 3-1-1-1 1 2 2 4-4-1-1z" />
    </svg>
  );
}
