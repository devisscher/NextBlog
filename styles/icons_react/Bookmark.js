import React from 'react';

export default function Bookmark(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v8l2-2 2 2v-8h-4z" transform="translate(2)" />
    </svg>
  );
}
