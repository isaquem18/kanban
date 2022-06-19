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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
const ask_1 = require("./routes/ask");
const Ask_1 = require("./controllers/Ask");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.set('view engine', 'ejs');
app.set('views', (0, path_1.resolve)('src', 'views', 'screens'));
app.use(express_1.default.static((0, path_1.resolve)('src', 'views', 'styles')));
app.use(express_1.default.static((0, path_1.resolve)('src', 'views', 'assets')));
app.use(express_1.default.static((0, path_1.resolve)('src', 'views', 'js')));
const ask = new Ask_1.Ask();
app.use('/ask', ask_1.askRoutes);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ask.list();
    return res.status(200).render('index.ejs', {
        response
    });
}));
app.get('/new-ask', (req, res) => {
    return res.status(200).render('newAsk');
});
exports.default = app;
