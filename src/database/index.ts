import * as mysql from 'mysql2';

export default class DB {

  init() {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'ASKS',
      password: process.env.DB_PASSWORD
    });
  }
}


