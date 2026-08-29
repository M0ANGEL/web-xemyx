import { usePageTitle } from '../../hooks/usePageTitle';
import { emprendedorMeta } from '../../data/emprendedor';
import { AudienceSection } from './AudienceSection';
import { EmprendedorCta } from './EmprendedorCta';
import { EmprendedorHero } from './EmprendedorHero';
import { FeaturesSection } from './FeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { ProductVisualSection } from './ProductVisualSection';

export function EmprendedorPage() {
  usePageTitle({
    title: emprendedorMeta.title,
    description: emprendedorMeta.description,
    exactTitle: true,
  });

  return (
    <>
      <EmprendedorHero />
      <HowItWorksSection />
      <FeaturesSection />
      <ProductVisualSection />
      <AudienceSection />
      <EmprendedorCta />
    </>
  );
}
