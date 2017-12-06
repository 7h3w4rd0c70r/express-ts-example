
import * as _ from 'lodash'

import * as tools from '../tools'

const users = [ ]

export default {
    async findById(userId: string): Promise<object> {
        for (const i in users) {
            if (users[i]._id === userId) {
                return _.cloneDeep(users[i])
            }
        }
        return null
    },
    async find(params: object): Promise<object[]> {
        return _.find(users, params)
    },
    async findOne(params: object): Promise<object> {
        const _users = _.find(users, params)
        if (!_.isNil(_users[0])) {
            return _.cloneDeep(_users[0])
        }
        return null
    },
    async findByIdAndRemove(userId: string): Promise<object> {
        let index: number = -1
        for (const i in users) {
            if (users[i]._id === userId) {
                index = Number(i)
                break
            }
        }
        if (index > -1) {
            return _.cloneDeep(users.splice(index, 1))
        }
        return null
    },
    async findByIdAndUpdate(userId: string, user: object): Promise<object> {
        for (const i in users) {
            if (users[i]._id === userId) {
                users[i] = _.merge({ }, users[i], user)
                return _.cloneDeep(users[i])
            }
        }
        return null
    },
    async create(user: object): Promise<object> {
        const _user = _.merge(
            { },
            user,
            { _id: tools.createUUID() }
        )
        users.push(_user)
        return _.cloneDeep(_user)
    },
}
