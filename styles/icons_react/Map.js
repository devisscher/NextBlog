import React from 'react';

export default function Map(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v8h8v-2.38a.5.5 0 0 0 0-.22v-5.41h-8zm1 1h6v4h-1.5a.5.5 0 0 0-.09 0 .5.5 0 1 0 .09 1h1.5v1h-6v-6zm2.5 1c-.83 0-1.5.67-1.5 1.5 0 1 1.5 2.5 1.5 2.5s1.5-1.5 1.5-2.5c0-.83-.67-1.5-1.5-1.5zm0 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z" />
    </svg>
  );
}
