import React from 'react';

export default function ExpandDown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v1h8v-1h-8zm2 2l2 2 2-2h-4zm-2 4v2h8v-2h-8z" />
    </svg>
  );
}
