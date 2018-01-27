import React from 'react';

export default function Spreadsheet(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75h-6.5zm.25 1h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1z" />
    </svg>
  );
}
