module.exports = {
  "development": {
    "username": process.env.DB_USERNAME, // local PostgreSQL DB username
    "password": process.env.DB_PASSWORD, // local PostgreSQL DB password
    "host": "127.0.0.1", // localhost
    "database": process.env.DB_NAME, // local PostgreSQL DB name
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DB_URL", // production database connection string
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true,
    },
  }
}
