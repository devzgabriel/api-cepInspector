import path from "path";

module.exports = {
  //   client: "sqlite3",
  //   connection: {
  //     filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  //   },
  //   migrations: {
  //     directory: path.resolve(__dirname, "src", "database", "migrations"),
  //   },
  //   useNullAsDefault: true,

  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/test.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};
