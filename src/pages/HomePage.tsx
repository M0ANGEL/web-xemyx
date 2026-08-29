import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { CtaSection } from './home/CtaSection';
import { EcosystemSection } from './home/EcosystemSection';
import { Hero } from './home/Hero';
import { PhilosophySection } from './home/PhilosophySection';
import { ProductsSection } from './home/ProductsSection';

export function HomePage() {
  usePageTitle({
    title: site.homeTitle,
    description: site.description,
    exactTitle: true,
  });

  return (
    <>
      <Hero />
      <ProductsSection />
      <EcosystemSection />
      <PhilosophySection />
      <CtaSection />
    </>
  );
}
