import React from 'react';

export default function Bolt(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M3 0l-3 5h2v3l3-5h-2v-3z" transform="translate(1)" />
    </svg>
  );
}
