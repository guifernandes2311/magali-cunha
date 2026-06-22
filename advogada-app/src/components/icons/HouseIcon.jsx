export default function HouseIcon({ size = 40, color = '#C9A060', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Roof */}
      <path
        d="M24 8 L42 22 L6 22 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Body */}
      <rect x="10" y="22" width="28" height="20" stroke={color} strokeWidth="2" fill="none" />
      {/* Window grid */}
      <rect x="14" y="26" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="18" y1="26" x2="18" y2="34" stroke={color} strokeWidth="1" />
      <line x1="14" y1="30" x2="22" y2="30" stroke={color} strokeWidth="1" />
      {/* Door */}
      <rect x="28" y="30" width="6" height="12" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
