interface AngledDividerProps {
  position?: 'top' | 'bottom'
  fillColor?: string
  className?: string
}

export default function AngledDivider({
  position = 'top',
  fillColor = '#0c0d12',
  className = '',
}: AngledDividerProps) {
  if (position === 'top') {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 inset-x-0 w-full overflow-hidden leading-none z-10 select-none ${className}`}
      >
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-9 lg:h-12 block"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1440,0 0,48" fill={fillColor} />
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none z-10 select-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6 sm:h-9 lg:h-12 block"
        preserveAspectRatio="none"
      >
        <polygon points="0,48 1440,0 1440,48" fill={fillColor} />
      </svg>
    </div>
  )
}
