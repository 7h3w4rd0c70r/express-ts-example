
export type Config = {
    environment: string;
    configEnv: string;
    server: ConfigServer;
    params: ConfigParams;
    jwt: ConfigJWT;
};

export type ConfigServer = {
    host: string;
    port: number;
};

export type ConfigParams = {
    verbrose: boolean;
};

export type ConfigJWT = {
    secret: string|Buffer;
};
