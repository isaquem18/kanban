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
Object.defineProperty(exports, "__esModule", { value: true });
exports.askRoutes = void 0;
const express_1 = require("express");
const Ask_1 = require("../../controllers/Ask");
const uuid_1 = require("uuid");
const askRoutes = (0, express_1.Router)();
exports.askRoutes = askRoutes;
const ask = new Ask_1.Ask();
askRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let searchValue = String((_a = req.query) === null || _a === void 0 ? void 0 : _a.value);
    let askList;
    if (!searchValue) {
        askList = yield ask.list();
    }
    else {
        searchValue = String(searchValue);
        askList = yield ask.search(searchValue);
    }
    return res.status(200).json(askList);
}));
askRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, text } = req.body;
    if (!title || !text) {
        return res.status(400).json({ message: 'Invalid title or/and text values.' });
    }
    const response = yield ask.create({ title, text });
    if (!(response === null || response === void 0 ? void 0 : response.affectedRows) || (response === null || response === void 0 ? void 0 : response.affectedRows) === 0) {
        return res.status(400).send();
    }
    return res.status(201).send();
}));
askRoutes.delete('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = ((_b = req.params) === null || _b === void 0 ? void 0 : _b.id) || '';
    if (!id || !(0, uuid_1.validate)(id)) {
        return res.status(404).end();
    }
    const response = yield ask.delete(id);
    if ((response === null || response === void 0 ? void 0 : response.affectedRows) === 0) {
        return res.status(404).end();
    }
    return res.status(200).json({ message: 'user successfully deleted.' });
}));
