import React from 'react';

export default function ThumbDown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v4h1v-4h-1zm2 0v4c.28 0 .53.09.72.28.19.19 1.15 2.12 1.28 2.38.13.26.39.39.66.31.26-.08.4-.36.31-.63-.08-.26-.47-1.59-.47-1.84s.22-.5.5-.5h1.5c.28 0 .5-.22.5-.5s-1.03-3.19-1.03-3.19c-.08-.18-.26-.31-.47-.31h-3.5z" />
    </svg>
  );
}