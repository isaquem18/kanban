import * as mysql from 'mysql2';

export default class DB {

  init() {
    return mysql.createConnection({
      host: process.env.DB_HOSTNAME,
      user: process.env.DB_USERNAME,
      database: process.env.DATABASE,
      password: process.env.DB_PASSWORD
    });
  }
}


