import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'node_db',
})

export default pool
