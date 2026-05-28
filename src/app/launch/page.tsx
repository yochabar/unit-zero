import { MarketplacePreview } from '@/components/sections/MarketplacePreview';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent Marketplace · Beta | Unit Zero',
  description: 'The permissionless marketplace for autonomous AI agents on Unit Zero. x402-native payments, UNIT0-powered. Coming soon.',
};

export default function LaunchPage() {
  return <MarketplacePreview />;
}
