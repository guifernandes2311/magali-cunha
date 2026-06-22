export default function BankIcon({ size = 40, color = '#C9A060', className = '' }) {
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
      {/* Pediment */}
      <path
        d="M6 18 L24 8 L42 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Columns */}
      <line x1="14" y1="18" x2="14" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="18" x2="24" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="18" x2="34" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <line x1="8" y1="36" x2="40" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="40" x2="42" y2="40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
