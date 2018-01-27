import React from 'react';

export default function CollapseLeft(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v8h1v-8h-1zm6 0v8h2v-8h-2zm-1 2l-2 2 2 2v-4z" />
    </svg>
  );
}
