import React from 'react';

export const LogoMark = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    aria-label="KT monogram logo"
  >
    <defs>
      <linearGradient id="ktGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    {/* Hexagon Shield */}
    <path
      d="M24 2 L42.5 12.5 V35.5 L24 46 L5.5 35.5 V12.5 Z"
      stroke="url(#ktGrad)"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="rgba(16, 185, 129, 0.06)"
    />
    {/* Letter K */}
    <path
      d="M15 17 V31 M15 24.5 L23 17 M15.8 25.5 L23.5 31"
      stroke="url(#ktGrad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Letter T */}
    <path
      d="M27 17 H37 M32 17 V31"
      stroke="url(#ktGrad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LogoMark;
