import React from 'react';

export default function CircleCheck(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm2 1.78l.72.72-3.22 3.22-1.72-1.72.72-.72 1 1 2.5-2.5z" />
    </svg>
  );
}
