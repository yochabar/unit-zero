import { Hero } from '@/components/sections/Hero';
import { Narrative } from '@/components/sections/Narrative';
import { WhyDifferent } from '@/components/sections/WhyDifferent';
import { Platform } from '@/components/sections/Platform';
import { AgentEconomy } from '@/components/sections/AgentEconomy';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { AiDefi } from '@/components/sections/AiDefi';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { Developers } from '@/components/sections/Developers';
import { Token } from '@/components/sections/Token';
import { Roadmap } from '@/components/sections/Roadmap';
import { Partners } from '@/components/sections/Partners';
import { FinalCta } from '@/components/sections/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Narrative />
      <WhyDifferent />
      <Platform />
      <AgentEconomy />
      <Ecosystem />
      <AiDefi />
      <Infrastructure />
      <Developers />
      <Token />
      <Roadmap />
      <Partners />
      <FinalCta />
    </>
  );
}
