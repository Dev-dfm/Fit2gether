import React from 'react';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.808 50.129"
    >
      <path
        d="M-680.076-325h56.808l-5.892,10.4h-32.973l4.113,6.817h14.185l-7.063,12.581,5.512,9.3-6.353,11.037Z"
        transform="translate(680.076 325)"
        fill="var(--primary-color)"
      />
    </svg>
  );
}
