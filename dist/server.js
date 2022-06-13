"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.set('views', (0, path_1.resolve)('src', 'screens'));
app.use(express_1.default.static((0, path_1.resolve)('src', 'styles')));
app.use(express_1.default.static((0, path_1.resolve)('src', 'assets')));
app.use(express_1.default.static((0, path_1.resolve)('src', 'js')));
app.get('/', (req, res) => {
    return res.status(200).render('index.ejs');
});
app.get('/search-asks', (req, res) => {
    const { value } = req.query;
    console.log(value);
});
exports.default = app;
