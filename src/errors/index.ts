
import { BadRequestError } from './classes/BadRequestError'
import { ForbiddenError } from './classes/ForbiddenError'
import { NotFoundError } from './classes/NotFoundError'
import { UnauthorizedError } from './classes/UnauthorizedError'
import { ServerError } from './classes/ServerError'

export { default as JsonError } from './classes/JsonError'

export default {
    badRequest: (message: string = 'Bad Request'): BadRequestError =>
        new BadRequestError(message),

    forbidden: (message: string = 'Forbidden'): ForbiddenError =>
        new ForbiddenError(message),

    notFound: (message: string = 'Not Found'): NotFoundError =>
        new NotFoundError(message),

    unauthorized: (message: string = 'Unauthorized'): UnauthorizedError =>
        new UnauthorizedError(message),

    serverError: (message: string = 'Server Error'): ServerError =>
        new ServerError(message),
}
