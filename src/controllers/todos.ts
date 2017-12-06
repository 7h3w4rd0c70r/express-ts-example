
import {
    Request,
    Response,
    NextFunction,
} from 'express'

import errors from '../errors'

export async function get_todos(req: Request, res: Response, next: NextFunction) {
    try {
        
        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function post_todos(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function get_todo(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function put_todo(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}

export async function delete_todo(req: Request, res: Response, next: NextFunction) {
    try {

        return next()
    } catch (ex) {
        return next(ex)
    }
}
