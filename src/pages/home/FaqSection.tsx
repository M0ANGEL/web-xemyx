import { Container, Heading, Section } from '../../components/ui';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import { Reveal } from '../../components/motion/Reveal';
import { homeFaq } from '../../data/faq';

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <Reveal>
          <Heading
            as={2}
            eyebrow="FAQ"
            subtitle="Respuestas rápidas sobre Zemyx y su ecosistema de productos."
            measure="wide"
          >
            Preguntas frecuentes
          </Heading>
        </Reveal>
        <FaqAccordion items={homeFaq} />
      </Container>
    </Section>
  );
}
