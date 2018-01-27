import React from 'react';

export default function ResizeWidth(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M3 0l-3 2.5 3 2.5v-2h2v2l3-2.5-3-2.5v2h-2v-2z" transform="translate(0 1)" />
    </svg>
  );
}
