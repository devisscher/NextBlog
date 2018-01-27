import React from 'react';

export default function BatteryEmpty(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M.09 0c-.06 0-.09.04-.09.09v5.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-1.91h1v-2h-1v-1.91c0-.06-.04-.09-.09-.09h-6.81zm.91 1h5v4h-5v-4z" transform="translate(0 1)" />
    </svg>
  );
}
