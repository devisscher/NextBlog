import React from 'react';

export default function Random(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M6 0v1h-.5c-.35 0-.56.1-.78.38l-1.41 1.78-1.53-1.78c-.22-.26-.44-.38-.78-.38h-1v1h1c-.05 0 .01.04.03.03l1.63 1.91-1.66 2.06h-1v1h1c.35 0 .56-.1.78-.38l1.53-1.91 1.66 1.91c.22.26.44.38.78.38h.25v1l2-1.5-2-1.5v1h-.22c-.01-.01-.05-.04-.06-.03l-1.75-2.06 1.53-1.91h.5v1l2-1.5-2-1.5z" />
    </svg>
  );
}
