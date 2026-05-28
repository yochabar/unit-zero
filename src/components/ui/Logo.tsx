import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

const LOGO_URL =
  'https://cdn.prod.website-files.com/678680e4580db97738b84e60/6787a541c8335d453286573c_units%20logo.svg';

export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_URL}
        alt="Units Network"
        width={withWordmark ? 28 : 32}
        height={withWordmark ? 28 : 32}
        className="object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      {withWordmark && (
        <span className="font-display text-[15px] font-medium tracking-tight text-bone-50">
          Unit&nbsp;Zero
        </span>
      )}
    </div>
  );
}
