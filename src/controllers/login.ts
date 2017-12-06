
import {
    Request,
    Response,
    NextFunction,
} from 'express'

import errors from '../errors'

export async function post_login(req: Request, res: Response, next: NextFunction) {
    try {
        
        return next()
    } catch (ex) {
        return next(errors.unauthorized())
    }
}
