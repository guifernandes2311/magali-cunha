export default function HeartIcon({ size = 40, color = '#C9A060', className = '' }) {
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
      <path
        d="M24 38 C24 38, 8 28, 8 18 C8 13, 12 9, 16 9 C19.5 9, 22.5 11, 24 14 C25.5 11, 28.5 9, 32 9 C36 9, 40 13, 40 18 C40 28, 24 38, 24 38Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
