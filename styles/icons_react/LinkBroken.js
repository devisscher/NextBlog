import React from 'react';

export default function LinkBroken(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M2 0v1h-1v1h2v-2h-1zm3.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47l-.44.44a.5.5 0 1 0 .69.69l.44-.44c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5a.5.5 0 1 0 .69.69l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-3.59 2.91a.5.5 0 0 0-.19.16l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47l.44-.44a.5.5 0 1 0-.69-.69l-.44.44c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5a.5.5 0 0 0-.44-.84.5.5 0 0 0-.06 0zm2.72 3.06v2h1v-1h1v-1h-2z" />
    </svg>
  );
}
