
import * as _ from 'lodash'

import * as inApp from '../repositories/inApp'
import errors from '../errors'
import {
    User,
} from '../models'

export async function getUserById(userId: string): Promise<User> {
    const user: User = await inApp.user.findById(userId)
    if (!_.isNil(user)) {
        return user
    }
    throw errors.notFound('User Not Found')
}

export async function getUserByUsername(username: string): Promise<User> {
    const user: User = await inApp.user.findOne({ username })
    if (!_.isNil(user)) {
        return user
    }
    throw errors.notFound('User Not Found')
}
