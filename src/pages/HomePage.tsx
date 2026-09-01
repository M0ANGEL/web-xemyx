import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { AboutSection } from './home/AboutSection';
import { ContactSection } from './home/ContactSection';
import { Hero } from './home/Hero';
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
      <AboutSection />
      <ContactSection />
    </>
  );
}
