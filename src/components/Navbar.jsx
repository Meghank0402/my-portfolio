import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/',            label: 'Home' },
  { to: '/skills',      label: 'Skills' },
  { to: '/experience',  label: 'Experience' },
  { to: '/projects',    label: 'Projects' },
  { to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <span className={styles.muted}>~/</span>meghank.jubur
      </div>
      <div className={styles.links}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
