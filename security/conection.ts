import { config } from '../config/conf';
const mysql = require('mysql');

export class ModelSql {

    private static instance: ModelSql;

    static dbc: any = mysql.createConnection(config.DBCONFIG);

    private constructor() { }


    static getConnection(): ModelSql {
        if (!ModelSql.instance) {
            ModelSql.instance = new ModelSql();
        }
        return ModelSql.instance;
    }

    static execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            ModelSql.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }
}