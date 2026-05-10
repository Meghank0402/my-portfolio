import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className={`page-wrapper page-enter ${styles.hero}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.dot} /> Available for new opportunities
          </div>
          <h1 className={styles.name}>
            Meghank<br /><span className={styles.accent}>Jubur</span>
          </h1>
          <p className={styles.title}>// data_engineer · pipeline_architect · cloud_specialist</p>
          <p className={styles.summary}>
            4+ years building scalable batch &amp; streaming ELT/ETL pipelines across
            Snowflake, AWS, Spark, and Airflow. Turning raw data into reliable infrastructure
            that powers analytics and ML at scale.
          </p>
          <div className={styles.ctas}>
            <button className="btn-primary" onClick={() => navigate('/projects')}>
              View Projects →
            </button>
            <button className="btn-ghost" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
            <a
              className="btn-ghost"
              href="https://github.com/Meghank0402"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLbl}>Years Exp.</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>99.9%</span>
              <span className={styles.statLbl}>Uptime SLA</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLbl}>Companies</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3.8</span>
              <span className={styles.statLbl}>MS GPA</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.pipelineCard}>
            <div className={styles.cardBar} />
            <div className={styles.cardLabel}>
              <span className={styles.pulseDot} /> &nbsp;pipeline activity
            </div>
            <div className={styles.nodes}>
              {['🗄 Source', '⚙ Airflow', '🔷 dbt', '❄ Snowflake', '📊 Analytics'].map((n, i) => (
                <div key={i} className={styles.nodeRow}>
                  <div className={styles.node}>{n}</div>
                  {i < 4 && <div className={styles.connLine}><div className={styles.connDot} /></div>}
                </div>
              ))}
            </div>
            <div className={styles.metricsGrid}>
              <MetricBox num="40%" label="Query Speed" color="var(--accent)" />
              <MetricBox num="35%" label="Cost Saved" color="var(--accent2)" />
              <MetricBox num="60%" label="Less Prep" color="var(--accent)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricBox({ num, label, color }) {
  return (
    <div className={styles.metricBox}>
      <span className={styles.metricNum} style={{ color }}>{num}</span>
      <span className={styles.metricLbl}>{label}</span>
    </div>
  )
}
