"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DATABASE_CONNECTION_STRING = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
exports.PORT = process.env.PORT || 3000;
