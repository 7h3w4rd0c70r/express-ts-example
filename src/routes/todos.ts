
import { Router } from 'express'

import * as todosController from '../controllers/todos'

const router = Router()

router
    .route('/')
    .get(todosController.get_todos)
    .post(todosController.post_todos)

router
    .route('/:todoId')
    .get(todosController.get_todo)
    .put(todosController.put_todo)
    .delete(todosController.delete_todo)

export default router
