import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Section } from '../components/Section/Section'
import { Button } from '../components/Button/Button'
import { Heading, Text } from '../components/Heading/Heading'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { Reveal } from '../components/Reveal/Reveal'
import { SectionDivider } from '../components/SectionDivider/SectionDivider'
import { TestimonialsPlaceholder } from '../components/TestimonialsPlaceholder/TestimonialsPlaceholder'
import { SessionSeriesGrid } from '../components/SessionSeriesGrid/SessionSeriesGrid'
import { useTranslations } from '../context/LanguageContext'
import { images } from '../data/images'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { contact } from '../data/contact'
import styles from '../App.module.css'

export function HomePage() {
  const tr = useTranslations()
  const location = useLocation()

  useLayoutEffect(() => {
    if (location.pathname !== '/') return
    const id = location.hash?.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: instant ? 'auto' : 'smooth' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.title = tr.meta.title
  }, [tr.meta.title])

  return (
    <main className={styles.main}>
      <section id="hero" className={styles.heroSection} aria-labelledby="hero-title">
        <div className={styles.heroContainedWrap}>
          <div className={styles.heroContainedCard}>
            <div className={styles.heroContainedMedia}>
              <ResponsiveImage
                src={images.hero.src}
                alt={images.hero.alt}
                priority
                sizes="(min-width: 901px) 40vw, 100vw"
              />
            </div>
            <div className={styles.heroContainedCopy}>
              <p className={styles.heroKicker}>{tr.nav.brand}</p>
              <h1 className={styles.heroTitle} id="hero-title">
                <span className={styles.heroMainTitle}>{tr.hero.mainTitle}</span>
              </h1>
              <p className={styles.heroTagline}>{tr.hero.tagline}</p>
              <div className={styles.ctaRow}>
                <Button to="/#contact">{tr.hero.book}</Button>
              </div>
            </div>
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
            <p>{tr.intro.p5}</p>
            <p>{tr.intro.p6}</p>
          </div>
        </Reveal>
      </Section>

      <section
        className={styles.imageBand}
        style={{ backgroundImage: `url(${images.interludeA.src})` }}
        aria-hidden="true"
      />

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
                <p>{tr.about.p4}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            {/* NOTE (handoff): Elias may later want to revisit the choice of About image — no change requested for now. */}
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

      <Section id="session" variant="spaciousTightBottom">
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

      <Section id="offering" variant="spaciousTightTop">
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
          <SessionSeriesGrid sessions={tr.series.sessions} />

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
                className={
                  i === 1
                    ? `${styles.galleryItem} ${styles.galleryItemFocalLeft}`
                    : styles.galleryItem
                }
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
              <p className={styles.contactPhoneRow}>
                <span className={styles.contactPhoneLabel}>{tr.contact.phoneLabel}</span>
                <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
              </p>
              <div className={styles.contactActions}>
                <Button href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {tr.contact.whatsappCta}
                </Button>
              </div>
              <ContactForm />
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
    </main>
  )
}
