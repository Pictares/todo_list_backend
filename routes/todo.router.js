import { Router } from 'express'
import todoController from '../controllers/todo.controller.js'

const router = new Router()

router.post('/todo', todoController.createTodo)
router.get('/todo', todoController.getTodos)
router.get('/todo/:id', todoController.getTodo)
router.put('/todo', todoController.updateTodo)
router.patch('/todo/:id', todoController.updateTodoStatus)
router.delete('/todo/:id', todoController.deleteTodo)

export default router
