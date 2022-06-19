"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3000;
const HOSTNAME = ' 127.0.0.1';
server_1.default.listen(PORT, () => {
    console.log(`SERVER STARTED ON ${HOSTNAME}:${PORT}`);
});
