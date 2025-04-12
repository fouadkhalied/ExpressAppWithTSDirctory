"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.pool = void 0;
// src/db.ts
const pg_1 = require("pg");
const _1 = require(".");
exports.pool = new pg_1.Pool({
    connectionString: _1.DATABASE_CONNECTION_STRING
});
// Optional test connection
const connect = async () => {
    exports.pool.connect()
        .then(() => console.log('Connected to PostgreSQL 🎉'))
        .catch((err) => console.error('PostgreSQL connection error', err));
};
exports.connect = connect;
