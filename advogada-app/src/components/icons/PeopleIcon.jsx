export default function PeopleIcon({ size = 40, color = '#C9A060', className = '' }) {
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
      {/* Left person */}
      <circle cx="12" cy="14" r="5" stroke={color} strokeWidth="2" />
      <path
        d="M4 38 C4 30, 8 26, 12 26 C16 26, 20 30, 20 38"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right person */}
      <circle cx="36" cy="14" r="5" stroke={color} strokeWidth="2" />
      <path
        d="M28 38 C28 30, 32 26, 36 26 C40 26, 44 30, 44 38"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center person */}
      <circle cx="24" cy="12" r="5.5" stroke={color} strokeWidth="2" />
      <path
        d="M14 40 C14 31, 18.5 27, 24 27 C29.5 27, 34 31, 34 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
