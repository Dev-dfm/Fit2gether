import React from 'react';

export default function CloseIcon(): JSX.Element {
  return (
    <svg
      enable-background="new 0 0 30 30"
      viewBox="0 0 30 30"
      width="auto"
      height="auto"
    >
      <linearGradient
        id="close"
        x1="16"
        x2="16"
        y1="3"
        y2="29.413"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#2a9d8f"></stop>
        <stop offset="1" stop-color="#264653"></stop>
      </linearGradient>
      <path
        fill="url(#close)"
        d="M24,3H8C5.2432,3,3,5.2432,3,8v16c0,2.7568,2.2432,5,5,5h16c2.7568,0,5-2.2432,5-5V8C29,5.2432,26.7568,3,24,3z M27,24c0,1.6543-1.3457,3-3,3H8c-1.6543,0-3-1.3457-3-3V8c0-1.6543,1.3457-3,3-3h16c1.6543,0,3,1.3457,3,3V24z M24.3535,9.0606L17.4141,16l6.9394,6.9394c0.1953,0.1953,0.1953,0.5118,0,0.7072l-0.7069,0.7069c-0.1953,0.1953-0.5118,0.1953-0.7072,0L16,17.4141l-6.9394,6.9394c-0.1953,0.1953-0.5118,0.1953-0.7072,0l-0.7069-0.7069c-0.1953-0.1953-0.1953-0.5118,0-0.7072L14.5859,16L7.6465,9.0606c-0.1953-0.1953-0.1953-0.5118,0-0.7072l0.7069-0.7069c0.1953-0.1953,0.5118-0.1953,0.7072,0L16,14.5859l6.9394-6.9394c0.1953-0.1953,0.5118-0.1953,0.7072,0l0.7069,0.7069C24.5488,8.5488,24.5488,8.8653,24.3535,9.0606z"
      ></path>
    </svg>
  );
}
