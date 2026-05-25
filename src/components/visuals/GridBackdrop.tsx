'use client';

import { cn } from '@/lib/utils';

interface GridBackdropProps {
  className?: string;
  variant?: 'default' | 'fine' | 'dense';
  showScan?: boolean;
  fade?: 'radial' | 'top' | 'bottom' | 'none';
}

export function GridBackdrop({
  className,
  variant = 'default',
  showScan = false,
  fade = 'radial',
}: GridBackdropProps) {
  const grid =
    variant === 'fine'
      ? 'bg-grid-fine'
      : variant === 'dense'
      ? 'bg-grid'
      : 'bg-grid';

  const fadeMask =
    fade === 'radial'
      ? '[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]'
      : fade === 'top'
      ? '[mask-image:linear-gradient(to_bottom,black,transparent)]'
      : fade === 'bottom'
      ? '[mask-image:linear-gradient(to_top,black,transparent)]'
      : '';

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className={cn('absolute inset-0', grid, fadeMask)} />
      {showScan && (
        <div className="absolute inset-x-0 top-0 h-full">
          <div className="absolute inset-x-0 top-0 h-32 animate-scan bg-gradient-to-b from-transparent via-signal-300/[0.06] to-transparent" />
        </div>
      )}
    </div>
  );
}
