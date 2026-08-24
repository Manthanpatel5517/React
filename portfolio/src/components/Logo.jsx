export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-mark"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00d9c0" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="39" height="39" rx="11" fill="url(#logoGradient)" />
      <path
        d="M10 28V12h3.1l6.9 9.2L26.9 12H30v16h-3.4V17.4l-6.6 8.7-6.6-8.7V28H10z"
        fill="#04141a"
      />
    </svg>
  )
}
