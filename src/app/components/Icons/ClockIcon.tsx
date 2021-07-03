import React from 'react';

type IconProps = {
  className?: string;
};

export default function ClockIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} width="25" viewBox="0 0 20 20">
      <path
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm1-8.251V7a1,1,0,0,0-2,0v5a1.006,1.006,0,0,0,.118.472l1.5,2.8a1,1,0,1,0,1.764-.944Z"
        transform="translate(-2 -2)"
        fill="currentColor"
      />
    </svg>
  );
}
