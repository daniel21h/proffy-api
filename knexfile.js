"use strict";
const path = require('path');
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'dist', 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'dist', 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};
