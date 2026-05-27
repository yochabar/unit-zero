import { EcosystemProjects } from '@/components/sections/EcosystemProjects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecosystem | Unit Zero',
  description: 'Explore the Unit Zero ecosystem — DeFi protocols, gaming studios, infrastructure tools, wallets, and marketplaces building on the AI-native blockchain.',
};

export default function EcosystemPage() {
  return <EcosystemProjects />;
}
