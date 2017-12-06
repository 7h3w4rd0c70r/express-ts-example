
import * as _ from 'lodash'

import * as tools from '../tools'

const todos = [ ]

export default {
    async findById(todoId: string): Promise<object> {
        for (const i in todos) {
            if (todos[i]._id === todoId) {
                return _.cloneDeep(todos[i])
            }
        }
        return null
    },
    async find(params: object): Promise<object[]> {
        return _.find(todos, params)
    },
    async findOne(params: object): Promise<object> {
        const _todos = _.find(todos, params)
        if (!_.isNil(_todos[0])) {
            return _.cloneDeep(_todos[0])
        }
        return null
    },
    async findByIdAndRemove(todoId: string): Promise<object> {
        let index: number = -1
        for (const i in todos) {
            if (todos[i]._id === todoId) {
                index = Number(i)
                break
            }
        }
        if (index > -1) {
            return _.cloneDeep(todos.splice(index, 1))
        }
        return null
    },
    async findByIdAndUpdate(todoId: string, todo: object): Promise<object> {
        for (const i in todos) {
            if (todos[i]._id === todoId) {
                todos[i] = _.merge({ }, todos[i], todo)
                return _.cloneDeep(todos[i])
            }
        }
        return null
    },
    async create(todo: object): Promise<object> {
        const _todo = _.merge(
            { },
            todo,
            { _id: tools.createUUID() }
        )
        todos.push(_todo)
        return _.cloneDeep(_todo)
    },
}
