
import {
    Router,
    Request,
    Response,
    NextFunction,
} from 'express'
import * as _ from 'lodash'

import errors from '../errors'

const router = Router()

router
    .use(async function (req: Request, res: Response, next: NextFunction) {
        res.set('Access-Control-Allow-Origin', '*')
        res.set('Access-Control-Allow-Headers', 'content-type, x-access-token, token')
        res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, HEAD')
        next()
    })

router
    .route('*')
    .options(async function (req: Request, res: Response, next: NextFunction) {
        try {
            res.json({
                status: 'ok',
            })
        } catch (ex) {
            next(ex)
        }
    })

import LoginRoutes from './login'
import TodosRoutes from './todos'
import UsersRoutes from './users'

router.use('/', LoginRoutes)
router.use('/todos', TodosRoutes)
router.use('/users', UsersRoutes)

router
    .route('*')
    .all(async function (req: Request, res: Response, next: NextFunction) {
        try {
            if (res.out === undefined) {
                throw errors.notFound()
            }
            next()
        } catch (ex) {
            next(ex)
        }
    })

export default router
