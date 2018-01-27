import React from 'react';

export default function Lightbulb(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M3.41 0a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 1 0 .44.88l3-1.5a.5.5 0 0 0-.31-.94zm1 1.5a.5.5 0 0 0-.13.06l-4 2a.5.5 0 1 0 .44.88l4-2a.5.5 0 0 0-.31-.94zm0 2a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 0 0 .22.94h2a.5.5 0 0 0 .16-1l1.06-.56a.5.5 0 0 0-.31-.94zm-2.56 3.5a.5.5 0 0 0 .16 1h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0z" transform="translate(1)" />
    </svg>
  );
}
