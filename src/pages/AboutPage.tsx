import { Button, Container, Heading, Section } from '../components/ui';
import { Reveal } from '../components/motion/Reveal';
import {
  aboutApproach,
  aboutClosing,
  aboutHero,
  aboutMeta,
  aboutMission,
  aboutPillars,
} from '../data/about';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './AboutPage.module.css';

export function AboutPage() {
  usePageTitle({
    title: aboutMeta.title,
    description: aboutMeta.description,
  });

  return (
    <>
      <Section>
        <Container>
          <Reveal>
            <div className={`${styles.hero} ${styles.heroWide}`}>
              <Heading eyebrow={aboutHero.eyebrow} subtitle={aboutHero.subtitle} measure="wide">
                {aboutHero.title}
              </Heading>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <Reveal>
            <Heading as={2} eyebrow="Nuestra forma de trabajar" measure="wide">
              {aboutMission.title}
            </Heading>
            <p className={styles.closing}>{aboutMission.text}</p>
          </Reveal>
          <div className={styles.grid}>
            {aboutPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <article className={styles.card}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Heading as={2} measure="wide">
              {aboutApproach.title}
            </Heading>
          </Reveal>
          <div className={styles.steps}>
            {aboutApproach.steps.map((step, index) => (
              <Reveal key={step.title} className={styles.step} delay={0.1 * index}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <Reveal>
            <div className={styles.closing}>
              <Heading as={2} measure="wide">
                {aboutClosing.title}
              </Heading>
              <p>{aboutClosing.text}</p>
              <div className={styles.actions}>
                <Button to="/productos" withArrow>
                  Ver productos
                </Button>
                <Button to="/contacto" variant="outline">
                  Contacto
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
