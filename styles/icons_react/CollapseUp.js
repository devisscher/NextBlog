import React from 'react';

export default function CollapseUp(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v1h8v-1h-8zm4 3l-2 2h4l-2-2zm-4 3v2h8v-2h-8z" />
    </svg>
  );
}
