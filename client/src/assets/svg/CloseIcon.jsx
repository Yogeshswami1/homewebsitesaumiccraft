import * as React from "react";

function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36} // Increased width
      height={36} // Increased height
      viewBox="0 0 36 36" // Adjusted viewBox for larger size
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff8a00", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#e52e71", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="1" dy="1" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <circle cx="18" cy="18" r="17" fill="url(#grad1)" /> {/* Centered and proper circle */}
        <path
          d="M22 14L14 22M14 14l8 8" // Cross lines with increased length for better fit
          stroke="#fff"
          strokeWidth="2.5" // Thicker lines for better visibility
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default CloseIcon;
