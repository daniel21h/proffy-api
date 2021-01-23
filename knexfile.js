const path = require('path')

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'dist', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
  },
  useNullAsDefault: true,
}