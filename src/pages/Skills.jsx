import styles from './Skills.module.css'

const categories = [
  { title: 'Languages', tags: ['Python', 'SQL', 'PySpark', 'Scala', 'Bash'] },
  { title: 'Orchestration & Transform', tags: ['Apache Airflow', 'dbt', 'AWS Glue', 'Azure Data Factory', 'Prefect'] },
  { title: 'Processing & Streaming', tags: ['Apache Spark', 'Databricks', 'Apache Kafka', 'AWS Kinesis'] },
  { title: 'Cloud & Warehouses', tags: ['AWS', 'S3', 'Redshift', 'Lambda', 'Snowflake', 'BigQuery', 'Azure Synapse'] },
  { title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Oracle', 'DB2', 'SQL Server'] },
  { title: 'DevOps', tags: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'CloudFormation'] },
  { title: 'Data Quality & Governance', tags: ['Great Expectations', 'dbt Tests', 'Apache Atlas', 'Data Lineage', 'RBAC', 'Metadata Mgmt'] },
  { title: 'Core Competencies', tags: ['Analytical Mindset', 'Cross-functional Collab', 'Data Modeling', 'Kimball', 'Medallion Arch', 'CI/CD'] },
]

export default function Skills() {
  return (
    <div className={`page-wrapper page-enter ${styles.wrap}`}>
      <div className="container">
        <span className="section-kicker">// 01 &nbsp;expertise</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className={styles.grid}>
          {categories.map(c => (
            <div key={c.title} className={styles.card}>
              <div className={styles.cat}>{c.title}</div>
              <div className={styles.tags}>
                {c.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
