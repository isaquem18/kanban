import { v4 as uuid } from 'uuid'; 
import db from "../database";

interface IAsk {
  title: string;
  text: string;
};

export class Ask {

  private connection: any;

  constructor() {
    this.connection = new db().init();
  }

  async list() {
    const [response] = await this.connection.promise().query(`SELECT * FROM asks`);

    return response;
  }


  async search(searchValue: string) {
    try {

      const [response] = await this.connection.promise().query(`SELECT * FROM ASKS 
      WHERE title LIKE '%${searchValue}%' 
      OR text LIKE '%${searchValue}%';
      `)

      return response;

    } catch (e) {

    }
  }


  async create({ title, text }: IAsk) {
    try {

      const ask_id = String(uuid());
      const [response] = await this.connection
        .promise()
        .query(`INSERT INTO asks VALUES (
            '${ask_id}',
            '${String(title)}',
            '${String(text)}'
          )`)

      return response;

    } catch (e) {

    }

  }


  async delete(id: string) {

    const [response] = await this.connection
      .promise()  
      .query(`DELETE FROM asks WHERE ask_id = '${id}' LIMIT 1`); 
    
    return response;
  }
} 