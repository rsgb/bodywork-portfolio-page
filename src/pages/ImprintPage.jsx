import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/Section/Section'
import { Heading } from '../components/Heading/Heading'
import { useTranslations } from '../context/LanguageContext'
import { contact } from '../data/contact'
import styles from '../App.module.css'

export function ImprintPage() {
  const tr = useTranslations()

  useEffect(() => {
    document.title = `${tr.legal.imprint.heading} — ${tr.footer.name}`
  }, [tr.legal.imprint.heading, tr.footer.name])

  return (
    <main className={styles.main}>
      <Section variant="spacious" className={styles.legalSection}>
        <Link to="/" className={styles.legalBack}>
          {tr.legal.backToHome}
        </Link>
        <Heading level={1} className={styles.legalPageTitle}>
          {tr.legal.imprint.heading}
        </Heading>
        <div className={styles.legalBlocks}>
          {tr.legal.imprint.sections.map((block) => (
            <div key={block.title} className={styles.legalBlock}>
              <Heading level={3} className={styles.legalSubheading}>
                {block.title}
              </Heading>
              <p className={styles.legalText}>{block.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.legalBlock}>
          <Heading level={3} className={styles.legalSubheading}>
            {tr.legal.imprint.contactHeading}
          </Heading>
          <p className={styles.legalText}>{tr.legal.imprint.contactIntro}</p>
          <p className={styles.legalContact}>
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
          </p>
        </div>
      </Section>
    </main>
  )
}
