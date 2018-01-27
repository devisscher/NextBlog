import React from 'react';

export default function Signpost(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M3 0v1h-2l-1 1 1 1h2v5h1v-4h2l1-1-1-1h-2v-2h-1z" />
    </svg>
  );
}
