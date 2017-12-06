
import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'

import { Config } from './index.d'

const defaultConfig: Config = {
    environment: _.isString(process.env.NODE_ENV) ? process.env.NODE_ENV : 'dev',
    configEnv: _.isString(process.env.CONFIG_ENV) ? process.env.CONFIG_ENV : 'development',
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    params: {
        verbrose: true,
    },
    jwt: {
        secret: 'abc123',
    },
}

let envConfig = { }
const envConfigPath = path.resolve(__dirname, `./env/${defaultConfig.configEnv}.js`)
if (fs.existsSync(envConfigPath)) {
    envConfig = require(envConfigPath)
}

const config: Config = _.merge(
    { },
    defaultConfig,
    envConfig
)

export default config
