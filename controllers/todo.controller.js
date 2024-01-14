import db from '../db.js'

class TodoController {
  async createTodo(req, res) {
    try {
      const { title, description } = req.body
      const newTodo = await db.query(
        `INSERT INTO todo (title, description) VALUES ($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newTodo.rows[0])
    } catch (error) {
      console.log(error)
      res.status(500).json('Create todo error')
    }
  }

  async getTodos(req, res) {
    try {
      const todos = await db.query('SELECT * FROM todo')
      res.json(todos.rows)
    } catch (error) {
      console.log(error)
      res.status(500).json('Get todos error')
    }
  }

  async getTodo(req, res) {
    const id = req.params.id
    const todo = await db.query('SELECT * FROM todo WHERE id=$1', [id])
    res.json(todo.rows[0])
    try {
    } catch (error) {
      console.log(error)
      res.status(500).json('Get todo error')
    }
  }

  async updateTodo(req, res) {
    const { id, title, description, completed } = req.body
    const todo = await db.query(
      'UPDATE todo SET title=$1, description=$2, completed=$3 WHERE id=$4 RETURNING *',
      [title, description, completed, id]
    )
    res.json(todo.rows[0])
    try {
    } catch (error) {
      console.log(error)
      res.status(500).json('Update todo error')
    }
  }

  async updateTodoStatus(req, res) {
    const { completed } = req.body
    const id = req.params.id
    const todo = await db.query('UPDATE todo SET completed=$1 WHERE id=$2', [
      completed,
      id,
    ])
    res.json(todo.rows[0])
    try {
    } catch (error) {
      console.log(error)
      res.status(500).json('Update todo error')
    }
  }

  async deleteTodo(req, res) {
    const id = req.params.id
    const todo = await db.query('DELETE FROM todo WHERE id=$1', [id])
    res.json(todo.rows[0])
    try {
    } catch (error) {
      console.log(error)
      res.status(500).json('Delete todo error')
    }
  }
}

export default new TodoController()
