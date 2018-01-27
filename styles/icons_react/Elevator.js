import React from 'react';

export default function Elevator(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M3 0l-3 3h6l-3-3zm-3 5l3 3 3-3h-6z" transform="translate(1)" />
    </svg>
  );
}
