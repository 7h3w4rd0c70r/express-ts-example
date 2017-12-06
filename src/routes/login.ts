
import { Router } from 'express'

import * as loginController from '../controllers/login'

const router = Router()

router
    .route('/login')
    .post(loginController.post_login)

export default router
