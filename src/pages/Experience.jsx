import { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    period: 'Feb 2025 – Present',
    role: 'Data Engineer',
    company: 'Cognizant',
    location: 'New Jersey',
    points: [
      'Architected scalable batch & streaming ETL/ELT pipelines using Python, PySpark, Kafka — processing millions of banking records daily with 99.9% uptime for risk, compliance, and fraud detection.',
      'Delivered complex SQL transformations (CTEs, window functions, optimized joins) across Oracle, DB2, and Snowflake with star/snowflake schema designs, improving query performance by 40%.',
      'Built cloud-native infrastructure on AWS (S3, Lambda, Glue, SQS, CloudFormation), reducing deployment time from hours to minutes via Infrastructure as Code.',
      'Implemented RBAC, data lineage, and Great Expectations validation — reducing data preparation time for analytics teams by 60%.',
      'Optimized via partitioning, medallion architecture, and cost-efficient query design — cutting cloud infrastructure costs by 35% while maintaining SLAs.',
    ],
    tags: ['PySpark', 'Kafka', 'Airflow', 'AWS', 'Snowflake', 'Great Expectations', 'Terraform', 'Kubernetes'],
  },
  {
    period: 'Aug 2023 – Aug 2024',
    role: 'Data Analyst',
    company: 'Virginia Modeling, Analysis & Simulation Center',
    location: 'Suffolk, VA',
    points: [
      'Built healthcare data pipelines on AWS using Python, Spark, and dbt while enforcing HIPAA, GxP, and FHIR compliance for clinical and biomarker datasets.',
      'Developed distributed Databricks workflows in PySpark and implemented ELT transformations with dbt for large-scale genomics datasets.',
      'Prepared feature-ready datasets for AI/ML teams and curated Tableau-optimized data products, cutting research data prep time by 50%.',
    ],
    tags: ['Databricks', 'dbt', 'AWS EMR', 'Redshift', 'Tableau', 'HIPAA', 'Great Expectations'],
  },
  {
    period: 'May 2020 – Jul 2022',
    role: 'Data Engineer',
    company: 'CloudFulcrum',
    location: 'Hyderabad',
    points: [
      'Architected ELT pipelines using Snowflake Staging, Streams, and Tasks with advanced SQL and Kimball-aligned star/snowflake schema designs.',
      'Built automation via Python and Azure Data Factory with metadata-driven pipeline execution; optimized Snowflake performance via query profiling and partition pruning.',
      'Established CI/CD with Git, GitHub, and Azure DevOps; implemented data sharing, zero-copy cloning, and data quality validation frameworks.',
    ],
    tags: ['Snowflake', 'Azure Data Factory', 'Python', 'Azure DevOps', 'Kimball', 'Git'],
  },
]

function TLItem({ job }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add(styles.visible); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.dot} />
      <div className={styles.period}>{job.period}</div>
      <div className={styles.role}>{job.role}</div>
      <div className={styles.company}>{job.company} &nbsp;·&nbsp; {job.location}</div>
      <ul className={styles.points}>
        {job.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className={styles.tags}>
        {job.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className={`page-wrapper page-enter ${styles.wrap}`}>
      <div className="container">
        <span className="section-kicker">// 02 &nbsp;work history</span>
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {jobs.map(j => <TLItem key={j.period} job={j} />)}
        </div>
        <div className={styles.eduBox}>
          <span className={styles.eduIcon}>🎓</span>
          <div>
            <div className={styles.eduDegree}>Master of Science in Computer Science</div>
            <div className={styles.eduSchool}>Old Dominion University &nbsp;·&nbsp; Norfolk, VA</div>
            <div className={styles.eduPeriod}>Aug 2022 — Dec 2024</div>
          </div>
          <div className={styles.gpaBox}>
            <span className={styles.gpaNum}>3.8</span>
            <span className={styles.gpaLbl}>GPA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
