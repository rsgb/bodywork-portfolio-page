import { useState } from 'react'
import { useTranslations } from '../../context/LanguageContext'
import { NETLIFY_CONTACT_FORM_NAME } from '../../data/contact'
import styles from '../../App.module.css'
import btnStyles from '../Button/Button.module.css'

export function ContactForm() {
  const tr = useTranslations()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new URLSearchParams(new FormData(form))

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.contactFormBlock}>
      <h3 className={styles.contactFormHeading}>{tr.contact.formHeading}</h3>
      <form
        className={styles.contactForm}
        name={NETLIFY_CONTACT_FORM_NAME}
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={NETLIFY_CONTACT_FORM_NAME} />
        <p className={styles.contactFormHoneypot} aria-hidden="true">
          <label>
            {tr.contact.formHoneypotLabel}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className={styles.contactFormRow}>
          <label className={styles.contactFormField}>
            <span className={styles.contactFormLabel}>{tr.contact.formName}</span>
            <input
              className={styles.contactFormInput}
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label className={styles.contactFormField}>
            <span className={styles.contactFormLabel}>{tr.contact.formEmail}</span>
            <input
              className={styles.contactFormInput}
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
        </div>
        <label className={styles.contactFormField}>
          <span className={styles.contactFormLabel}>{tr.contact.formMessage}</span>
          <textarea
            className={styles.contactFormTextarea}
            name="message"
            rows={4}
            required
          />
        </label>
        <div className={styles.contactFormFooter}>
          <button
            type="submit"
            className={`${btnStyles.btn} ${btnStyles.secondary} ${styles.contactFormSubmit}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? tr.contact.formSending : tr.contact.formSubmit}
          </button>
          {status === 'success' && (
            <p className={styles.contactFormFeedback} role="status">
              {tr.contact.formSuccess}
            </p>
          )}
          {status === 'error' && (
            <p className={styles.contactFormFeedbackError} role="alert">
              {tr.contact.formError}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
