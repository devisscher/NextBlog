import React from 'react';

export default function EnvelopeOpen(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M4 0l-4 2v6h8v-6l-4-2zm0 1.13l3 1.5v1.88l-3 1.5-3-1.5v-1.88l3-1.5zm-2 1.88v1l2 1 2-1v-1h-4z" />
    </svg>
  );
}
