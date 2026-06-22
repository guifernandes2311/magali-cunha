export default function ScalesIcon({ size = 64, color = '#C9A060', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Laurel wreath left */}
      <path
        d="M18 55 C10 45, 8 32, 16 24 C14 34, 18 44, 24 50 C20 52, 18 55, 18 55Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M15 62 C6 54, 4 40, 12 30 C11 42, 16 53, 22 58 C19 60, 15 62, 15 62Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M17 70 C8 64, 5 50, 12 40 C12 52, 18 62, 25 67 C21 69, 17 70, 17 70Z"
        fill={color}
        opacity="0.85"
      />
      {/* Laurel wreath right */}
      <path
        d="M82 55 C90 45, 92 32, 84 24 C86 34, 82 44, 76 50 C80 52, 82 55, 82 55Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M85 62 C94 54, 96 40, 88 30 C89 42, 84 53, 78 58 C81 60, 85 62, 85 62Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M83 70 C92 64, 95 50, 88 40 C88 52, 82 62, 75 67 C79 69, 83 70, 83 70Z"
        fill={color}
        opacity="0.85"
      />
      {/* Center stem */}
      <line x1="50" y1="20" x2="50" y2="82" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Base */}
      <line x1="36" y1="82" x2="64" y2="82" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Cross beam */}
      <line x1="22" y1="36" x2="78" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Left pan string */}
      <line x1="28" y1="36" x2="22" y2="56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="28" y1="36" x2="34" y2="56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Left pan */}
      <path d="M22 56 Q28 62 34 56" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Right pan string */}
      <line x1="72" y1="36" x2="66" y2="56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="72" y1="36" x2="78" y2="56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Right pan */}
      <path d="M66 56 Q72 62 78 56" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Top knob */}
      <circle cx="50" cy="20" r="3" fill={color} />
      {/* Bottom wreath tie */}
      <path d="M38 78 Q50 84 62 78" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
