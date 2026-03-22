import { Navbar } from './components/Navbar/Navbar'
import { Section } from './components/Section/Section'
import { Button } from './components/Button/Button'
import { Heading, Text } from './components/Heading/Heading'
import { ResponsiveImage } from './components/ResponsiveImage/ResponsiveImage'
import { Reveal } from './components/Reveal/Reveal'
import { SectionDivider } from './components/SectionDivider/SectionDivider'
import { TestimonialsPlaceholder } from './components/TestimonialsPlaceholder/TestimonialsPlaceholder'
import { SessionSeriesAccordion } from './components/SessionSeriesAccordion/SessionSeriesAccordion'
import { useTranslations } from './context/LanguageContext'
import { images } from './data/images'
import { contact } from './data/contact'
import styles from './App.module.css'

export default function App() {
  const tr = useTranslations()
  const year = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="hero" className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.heroImageWrap}>
            <ResponsiveImage
              src={images.hero.src}
              alt={images.hero.alt}
              priority
              className={styles.heroFigure}
              sizes="(min-width: 901px) 48vw, 100vw"
            />
            <div className={styles.heroGradient} aria-hidden="true" />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="hero-title">
              <span className={styles.heroName}>{tr.hero.name}</span>
              <span className={styles.heroSubtitle}>{tr.hero.subtitle}</span>
            </h1>
            <p className={styles.heroHeadline}>{tr.hero.headline}</p>
            <p className={styles.heroSubhead}>{tr.hero.subheadline}</p>
            <div className={styles.ctaRow}>
              <Button href="#contact">{tr.hero.book}</Button>
              <Button href="#contact" variant="secondary">
                {tr.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </section>

        <SectionDivider />

        <Section id="intro" variant="spacious">
          <Reveal>
            <Heading level={2}>{tr.intro.heading}</Heading>
            <div className={styles.proseStack}>
              <p>{tr.intro.p1}</p>
              <p>{tr.intro.p2}</p>
              <p>{tr.intro.p3}</p>
              <p>{tr.intro.p4}</p>
            </div>
          </Reveal>
        </Section>

        <section className={styles.imageBand} style={{ backgroundImage: `url(${images.interludeA.src})` }}>
          <div className={styles.imageBandInner}>
            <p className={styles.imageBandQuote}>{tr.imageBand.quote}</p>
          </div>
        </section>

        <TestimonialsPlaceholder items={[]} />

        <Section id="about" variant="spacious">
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <Reveal>
              <div>
                <Heading level={2}>{tr.about.heading}</Heading>
                <div className={styles.proseStack}>
                  <p>{tr.about.p1}</p>
                  <p>{tr.about.p2}</p>
                  <p>{tr.about.p3}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.aboutImageOverlap}>
                <ResponsiveImage
                  src={images.about.src}
                  alt={images.about.alt}
                  ratio="4/5"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Section>

        <SectionDivider />

        <Section id="support" variant="default">
          <Reveal>
            <Heading level={2}>{tr.support.heading}</Heading>
            <Text>{tr.support.intro}</Text>
            <ul className={styles.supportList}>
              {tr.supportReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.note}>
              <p>{tr.support.note}</p>
            </div>
          </Reveal>
        </Section>

        <div className={styles.interludeBleed}>
          <Reveal delay={60}>
            <ResponsiveImage
              src={images.interludeB.src}
              alt={images.interludeB.alt}
              sizes="100vw"
            />
          </Reveal>
        </div>

        <Section id="session" variant="spacious">
          <Reveal>
            <Heading level={2}>{tr.session.heading}</Heading>
            <div className={styles.proseStack}>
              <p>{tr.session.p1}</p>
              <p>{tr.session.p2}</p>
              <p>{tr.session.p3}</p>
              <p>{tr.session.p4}</p>
            </div>
          </Reveal>
        </Section>

        <Section id="offering" variant="spacious">
          <Reveal>
            <Heading level={2}>{tr.offering.heading}</Heading>
            <div className={styles.formatCards}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{tr.offering.cardIndividualTitle}</h3>
                <p>{tr.offering.cardIndividualBody}</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{tr.offering.cardSeriesTitle}</h3>
                <p>{tr.offering.cardSeriesBody}</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{tr.offering.cardRhythmTitle}</h3>
                <p>{tr.offering.cardRhythmBody}</p>
              </article>
            </div>

            <h3 className={styles.subheading}>{tr.series.heading}</h3>
            <p className={styles.seriesIntro}>{tr.series.intro}</p>
            <SessionSeriesAccordion sessions={tr.series.sessions} />

            <h3 className={styles.subheading}>{tr.pricing.heading}</h3>
            <p className={styles.seriesIntro}>{tr.pricing.intro}</p>
            <div className={styles.pricingTable}>
              {tr.pricing.items.map((row) => (
                <div key={row.duration} className={styles.pricingRow}>
                  <span className={styles.pricingDuration}>{row.duration}</span>
                  <span className={styles.pricingAmount}>{row.price}</span>
                </div>
              ))}
            </div>
            <p className={styles.pricingFootnote}>{tr.pricing.footnote}</p>
          </Reveal>
        </Section>

        <section className={styles.gallery} aria-label={tr.galleryLabel}>
          <div className={styles.galleryGrid}>
            {images.gallery.map((img, i) => (
              <Reveal key={img.id} delay={i * 50}>
                <ResponsiveImage
                  src={img.src}
                  alt={img.alt}
                  className={styles.galleryItem}
                  sizes="(min-width: 900px) 22vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        <Section id="contact" variant="spacious">
          <div className={styles.split}>
            <Reveal>
              <div>
                <Heading level={2}>{tr.contact.heading}</Heading>
                <Text>{tr.contact.intro}</Text>
                <ul className={styles.contactList}>
                  <li>
                    <span className={styles.contactLabel}>{tr.contact.phoneLabel}</span>
                    <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                  </li>
                  <li>
                    <span className={styles.contactLabel}>{tr.contact.emailLabel}</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                  <li>
                    <span className={styles.contactLabel}>{tr.contact.languagesLabel}</span>
                    <span>{tr.contact.languagesValue}</span>
                  </li>
                </ul>
                <div className={styles.contactActions}>
                  <Button href={`mailto:${contact.email}`}>{tr.hero.book}</Button>
                  <Button href={`tel:${contact.phoneTel}`} variant="secondary">
                    {contact.phoneDisplay}
                  </Button>
                </div>
                <div className={styles.contactFootnote}>
                  <Text muted>{tr.pricing.footnote}</Text>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80} className={styles.contactAside}>
              <ResponsiveImage
                src={images.contact.src}
                alt={images.contact.alt}
                ratio="4/5"
                sizes="(min-width: 768px) 38vw, 100vw"
              />
            </Reveal>
          </div>
        </Section>

        <Section id="disclaimer" variant="compact">
          <Reveal>
            <Heading level={2}>{tr.disclaimer.heading}</Heading>
            <div className={styles.disclaimerBox}>
              <p>{tr.disclaimer.body}</p>
            </div>
          </Reveal>
        </Section>

        <footer id="footer" className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerName}>{tr.footer.name}</p>
            <p className={styles.footerTag}>{tr.footer.tag}</p>
            <p className={styles.footerContact}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className={styles.footerCopy}>
              © {year} {tr.footer.name}
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
