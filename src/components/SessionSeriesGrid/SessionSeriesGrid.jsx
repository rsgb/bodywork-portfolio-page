import styles from './SessionSeriesGrid.module.css'

export function SessionSeriesGrid({ sessions }) {
  if (!sessions?.length) return null

  return (
    <ul className={styles.list}>
      {sessions.map((item, index) => (
        <li key={`${index}-${item.title}`} className={styles.row}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.body}>{item.body}</p>
        </li>
      ))}
    </ul>
  )
}
