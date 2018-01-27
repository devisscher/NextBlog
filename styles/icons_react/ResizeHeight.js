import React from 'react';

export default function ResizeHeight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M2.5 0l-2.5 3h2v2h-2l2.5 3 2.5-3h-2v-2h2l-2.5-3z" transform="translate(1)" />
    </svg>
  );
}
