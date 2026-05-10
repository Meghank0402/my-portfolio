import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    value: 'meghank0402@gmail.com',
    href: 'mailto:meghank0402@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'Meghank0402',
    href: 'https://github.com/Meghank0402',
    icon: '⌥',
  },
  {
    label: 'Phone',
    value: '(757) 831-3004',
    href: 'tel:7578313004',
    icon: '☎',
  },
  {
    label: 'Location',
    value: 'New Jersey, USA',
    href: null,
    icon: '◎',
  },
]

export default function Contact() {
  return (
    <div className={`page-wrapper page-enter ${styles.wrap}`}>
      <div className={`container ${styles.center}`}>
        <span className="section-kicker">// 04 &nbsp;reach out</span>
        <h2 className={`section-title ${styles.title}`}>Let's Build Something</h2>
        <p className={styles.sub}>
          Open to data engineering roles, pipeline architecture consulting,<br />
          and interesting data challenges. Response time: &lt; 24h.
        </p>
        <div className={styles.grid}>
          {links.map(l => (
            <div key={l.label} className={styles.card}>
              <div className={styles.cardIcon}>{l.icon}</div>
              <div className={styles.cardLabel}>{l.label}</div>
              {l.href ? (
                <a href={l.href} className={styles.cardValue} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {l.value}
                </a>
              ) : (
                <span className={styles.cardValue}>{l.value}</span>
              )}
            </div>
          ))}
        </div>
        <div className={styles.note}>
          <span className={styles.noteMono}>// currently based in New Jersey · open to remote &amp; hybrid roles</span>
        </div>
      </div>
    </div>
  )
}
