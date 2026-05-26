import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="text-bone-50"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9fe0c1" />
            <stop offset="1" stopColor="#419dff" />
          </linearGradient>
        </defs>
        {/* Outer frame */}
        <rect x="1" y="1" width="30" height="30" rx="4" stroke="url(#logo-grad)" strokeWidth="1.25" />
        {/* U */}
        <path
          d="M9 9V18C9 20.2091 10.7909 22 13 22H13.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* 0 (ring) */}
        <circle cx="20.5" cy="18" r="4.25" stroke="currentColor" strokeWidth="1.6" />
        {/* Node dots */}
        <circle cx="20.5" cy="13.75" r="1" fill="#9fe0c1" />
        <circle cx="13" cy="9" r="1" fill="#9fe0c1" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[15px] font-medium tracking-tight text-bone-50">
          Unit&nbsp;Zero
        </span>
      )}
    </div>
  );
}
