import { config } from "mssql"

export const APP_CONSTANTS = {
    filePath: ''
}

export const DB_CONFIG: config = {
    server: 'joydip-pc\\sqlexpress',
    database: 'appdb',
    user: 'sa',
    password: 'sqlserver2024',
    options: {
        trustServerCertificate: true,
        encrypt: false,
        //trustedConnection:true
        //encrypt: true
        instanceName: 'SQLEXPRESS'
    },
    port: 1433,
}