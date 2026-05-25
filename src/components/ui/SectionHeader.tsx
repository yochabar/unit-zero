'use client';

import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  size?: 'md' | 'lg';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  size = 'lg',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'mt-5 text-balance font-display tracking-tight text-bone-50',
            size === 'lg' ? 'text-display-lg' : 'text-display-md'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-bone-300 md:text-[18px]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
