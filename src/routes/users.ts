
import { Router } from 'express'

import * as usersController from '../controllers/users'

const router = Router()

router
    .route('/')
    .post(usersController.post_users)

router
    .route('/:userId')
    .get(usersController.get_user)
    .put(usersController.put_user)
    .delete(usersController.delete_user)

export default router
