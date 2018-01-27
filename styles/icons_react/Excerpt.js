import React from 'react';

export default function Excerpt(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v1h7v-1h-7zm0 2v1h5v-1h-5zm0 2v1h8v-1h-8zm0 2v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1z" />
    </svg>
  );
}
