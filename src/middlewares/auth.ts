
import {
    Request,
    Response,
    NextFunction,
} from 'express'

export async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        
        return next()
    } catch (ex) {
        return next(ex)
    }
}
