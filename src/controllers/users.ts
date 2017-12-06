
import {
    Request,
    Response,
    NextFunction,
} from 'express'

import errors from '../errors'

export async function get_users(req: Request, res: Response, next: NextFunction) {
    try {
        
        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function post_users(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function get_user(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function put_user(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function delete_user(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}
