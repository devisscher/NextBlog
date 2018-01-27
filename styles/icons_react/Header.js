import React from 'react';

export default function Header(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v1h.5c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5h-.5v1h3v-1h-.5c-.28 0-.5-.22-.5-.5v-1.5h3v1.5c0 .28-.22.5-.5.5h-.5v1h3v-1h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h.5v-1h-3v1h.5c.28 0 .5.22.5.5v1.5h-3v-1.5c0-.28.22-.5.5-.5h.5v-1h-3z" />
    </svg>
  );
}
