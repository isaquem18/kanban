"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ask = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../database"));
;
class Ask {
    constructor() {
        this.connection = new database_1.default().init();
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const [response] = yield this.connection.promise().query(`SELECT * FROM asks`);
            return response;
        });
    }
    search(searchValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [response] = yield this.connection.promise().query(`SELECT * FROM ASKS 
      WHERE title LIKE '%${searchValue}%' 
      OR text LIKE '%${searchValue}%';
      `);
                return response;
            }
            catch (e) {
            }
        });
    }
    create({ title, text }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ask_id = String((0, uuid_1.v4)());
                const [response] = yield this.connection
                    .promise()
                    .query(`INSERT INTO asks VALUES (
            '${ask_id}',
            '${String(title)}',
            '${String(text)}'
          )`);
                return response;
            }
            catch (e) {
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [response] = yield this.connection
                .promise()
                .query(`DELETE FROM asks WHERE ask_id = '${id}' LIMIT 1`);
            return response;
        });
    }
}
exports.Ask = Ask;
