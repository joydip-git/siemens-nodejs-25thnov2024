import sql from "mssql"
import dotenv from "dotenv";

dotenv.config()

export const APP_CONSTANTS = {
    filePath: ''
}

export const DB_CONFIG: sql.config = {
    server: process.env.SQL_SERVER_NAME || '',
    database: process.env.DATABASE,
    user: process.env.USER_ID,
    password: process.env.PASSWORD,
    options: {
        trustServerCertificate: true,
        encrypt: false,
        instanceName: process.env.INSTANCE_NAME
    },
    port: Number(process.env.SQL_EXPRESS_PORT) || 1433,
}

export const DI_TOKENS = {
    REPOSITORY_TOKEN: Symbol('REPOSITORY_TOKEN'),
    CONTROLLER_TOKEN: Symbol('CONTROLLER_TOKEN'),
    PRODUCT_CONTROLLER_ROUTES_TOKEN: Symbol('PRODUCT_CONTROLLER_ROUTES_TOKEN'),
    APP_ROUTES_TOKEN: Symbol('APP_ROUTES_TOKEN')
}