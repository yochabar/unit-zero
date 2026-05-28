import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

const TOKEN_ICON = 'https://s2.coinmarketcap.com/static/img/coins/64x64/33785.png';

export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TOKEN_ICON}
        alt="UNIT0"
        width={32}
        height={32}
        className="rounded-full object-contain"
      />
      {withWordmark && (
        <span className="font-display text-[15px] font-medium tracking-tight text-bone-50">
          Unit&nbsp;Zero
        </span>
      )}
    </div>
  );
}
