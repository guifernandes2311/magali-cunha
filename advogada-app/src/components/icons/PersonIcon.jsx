export default function PersonIcon({ size = 40, color = '#C9A060', className = '' }) {
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
      {/* Head */}
      <circle cx="24" cy="14" r="8" stroke={color} strokeWidth="2" />
      {/* Body */}
      <path
        d="M10 42 C10 32, 16 28, 24 28 C32 28, 38 32, 38 42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
