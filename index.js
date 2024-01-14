import express from 'express'
import cors from 'cors'
import todoRouter from './routes/todo.router.js'

const PORT = 5000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', todoRouter)

app.listen(PORT, () => {
  console.log('Server was started on port: ', PORT)
})
