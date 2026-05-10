import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    icon: '🔷',
    name: 'Modern ELT Pipeline',
    description:
      "Production-ready ELT pipeline built from scratch using dbt, Snowflake, and Airflow. Raw data is extracted from Snowflake's TPCH dataset, transformed via dbt models with staging, intermediate, and mart layers, then orchestrated by Airflow with Astronomer Cosmos. Covers data modeling, incremental transformations, reusable macros, and automated data quality testing.",
    tags: ['dbt', 'Snowflake', 'Apache Airflow', 'Astronomer Cosmos', 'Docker', 'SQL', 'Python'],
    github: 'https://github.com/Meghank0402',
    highlights: ['Star schema modeling', 'Incremental transforms', 'Generic + singular dbt tests', 'Daily-scheduled DAG'],
  },
  {
    icon: '📊',
    name: 'Sales Performance Dashboard',
    description:
      'End-to-end analytics solution integrating SQL, Python, and Tableau to track sales KPIs — monthly revenue, top-performing products, and regional trends. Automated ETL and monthly reporting pipeline reduced manual work by 30% and helped stakeholders optimize discount strategies through interactive dashboards.',
    tags: ['MySQL', 'Python', 'Pandas', 'SQLAlchemy', 'Tableau', 'Matplotlib'],
    github: 'https://github.com/Meghank0402',
    highlights: ['30% less manual work', 'Regional sales trends', 'Discount impact analysis', 'Automated reporting'],
  },
]

function ProjectCard({ project, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const t = setTimeout(() => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { ref.current.classList.add(styles.visible); obs.disconnect() }
      }, { threshold: 0.1 })
      obs.observe(ref.current)
      return () => obs.disconnect()
    }, delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.cardTop} />
      <div className={styles.header}>
        <div className={styles.icon}>{project.icon}</div>
        <a className={styles.ghLink} href={project.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.highlights}>
        {project.highlights.map(h => (
          <span key={h} className={styles.highlight}>✓ {h}</span>
        ))}
      </div>
      <div className={styles.stack}>
        {project.tags.map(t => <span key={t} className={styles.tech}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className={`page-wrapper page-enter ${styles.wrap}`}>
      <div className="container">
        <span className="section-kicker">// 03 &nbsp;portfolio</span>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} delay={i * 100} />)}
        </div>
      </div>
    </div>
  )
}
