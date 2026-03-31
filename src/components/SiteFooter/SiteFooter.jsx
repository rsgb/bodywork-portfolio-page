import { Link } from 'react-router-dom'
import { useTranslations } from '../../context/LanguageContext'
import styles from '../../App.module.css'

export function SiteFooter() {
  const tr = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerName}>{tr.footer.name}</p>
        <p className={styles.footerTag}>{tr.footer.tag}</p>
        <p className={styles.footerCopy}>
          © {year} {tr.footer.name} · {tr.footer.photosCredit}
        </p>
        <nav className={styles.footerLegalNav} aria-label={tr.footer.legalNavLabel}>
          <Link to="/privacy">{tr.footer.linkPrivacy}</Link>
          <span className={styles.footerLegalSep} aria-hidden="true">
            ·
          </span>
          <Link to="/imprint">{tr.footer.linkImprint}</Link>
        </nav>
      </div>
    </footer>
  )
}
