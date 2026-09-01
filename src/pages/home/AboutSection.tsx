import { Button, Container, Heading } from '../../components/ui';
import { Reveal } from '../../components/motion/Reveal';
import {
  aboutApproach,
  aboutClosing,
  aboutHero,
  aboutMission,
  aboutPillars,
} from '../../data/about';
import aboutStyles from '../AboutPage.module.css';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.block}>
        <Container>
          <Reveal>
            <div className={`${aboutStyles.hero} ${aboutStyles.heroWide}`}>
              <Heading eyebrow={aboutHero.eyebrow} subtitle={aboutHero.subtitle} measure="wide">
                {aboutHero.title}
              </Heading>
            </div>
          </Reveal>
        </Container>
      </div>

      <div className={`${styles.block} ${styles.surface}`}>
        <Container>
          <Reveal>
            <Heading as={2} eyebrow="Nuestra forma de trabajar" measure="wide">
              {aboutMission.title}
            </Heading>
            <p className={aboutStyles.closing}>{aboutMission.text}</p>
          </Reveal>
          <div className={aboutStyles.grid}>
            {aboutPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <article className={aboutStyles.card}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div className={styles.block}>
        <Container>
          <Reveal>
            <Heading as={2} measure="wide">
              {aboutApproach.title}
            </Heading>
          </Reveal>
          <div className={aboutStyles.steps}>
            {aboutApproach.steps.map((step, index) => (
              <Reveal key={step.title} className={aboutStyles.step} delay={0.1 * index}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div className={`${styles.block} ${styles.surface}`}>
        <Container>
          <Reveal>
            <div className={styles.philosophy}>
              <p className={styles.philosophyEyebrow}>Filosofía</p>
              <blockquote className={styles.quote}>
                Crear herramientas digitales simples, útiles y modernas.
              </blockquote>
              <p className={styles.philosophyNote}>
                Cada producto de Zemyx nace con un propósito claro: resolver un problema real sin
                complicar la experiencia de quien lo usa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={aboutStyles.closing}>
              <Heading as={2} measure="wide">
                {aboutClosing.title}
              </Heading>
              <p>{aboutClosing.text}</p>
              <div className={aboutStyles.actions}>
                <Button href="#productos" withArrow>
                  Ver productos
                </Button>
                <Button href="#contacto" variant="outline">
                  Contacto
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
