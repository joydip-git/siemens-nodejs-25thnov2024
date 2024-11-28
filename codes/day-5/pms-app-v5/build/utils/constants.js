"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = exports.APP_CONSTANTS = void 0;
exports.APP_CONSTANTS = {
    filePath: ''
};
exports.DB_CONFIG = {
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
};
