export default function TreeIcon({ size = 40, color = '#C9A060', className = '' }) {
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
      {/* Trunk */}
      <line x1="24" y1="28" x2="24" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Branches */}
      <line x1="24" y1="20" x2="12" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="20" x2="36" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="8" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="40" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="16" x2="24" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Leaves */}
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="36" cy="10" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="8" cy="18" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="18" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="6" r="3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
