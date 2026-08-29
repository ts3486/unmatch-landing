type IconProps = { className?: string };

const base = "h-5 w-5";

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBreath({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="9" strokeDasharray="1.5 3.2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function IconChecklist({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M10 6h9M10 12h9M10 18h9" strokeLinecap="round" />
      <path d="M4.5 6.3l1 1L7.5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 12.3l1 1 2-2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 18.3l1 1 2-2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconNote({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
      <path d="M8 8.5h8M8 12.5h8M8 16.5h5" strokeLinecap="round" />
    </svg>
  );
}

export function IconShieldPulse({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 3.5l6.5 2.7v5.6c0 4.3-2.8 7.2-6.5 8.7-3.7-1.5-6.5-4.4-6.5-8.7V6.2L12 3.5z" strokeLinejoin="round" />
      <path d="M8 12.5h1.6l1.3-2.3 1.8 4.6 1.3-2.3H16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCardPause({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3.5" y="6" width="17" height="12.5" rx="2" />
      <path d="M3.5 10h17" strokeLinecap="round" />
      <path d="M10 15v2M13 15v2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendarCheck({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16" strokeLinecap="round" />
      <path d="M8 3v3M16 3v3" strokeLinecap="round" />
      <path d="M9 14l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTrendUp({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 16.5l5.2-5.2 3 3L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 6.5H20v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBookOpen({ className = base }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path
        d="M12 6.2c-1.6-1.3-4.2-2.1-7.3-2.1v13.4c3.1 0 5.7.8 7.3 2.1 1.6-1.3 4.2-2.1 7.3-2.1V4.1c-3.1 0-5.7.8-7.3 2.1z"
        strokeLinejoin="round"
      />
      <path d="M12 6.2v13.4" />
    </svg>
  );
}
