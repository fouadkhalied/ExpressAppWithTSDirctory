"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const notFoundHandler_1 = require("./components/middleware/notFoundHandler");
const errorHandlert_1 = require("./components/middleware/errorHandlert");
const db_1 = require("./components/config/db");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello from Express + TypeScript' });
});
app.use(errorHandlert_1.errorHandler);
app.use(notFoundHandler_1.notFoundHandler);
try {
    (0, db_1.connect)();
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
catch (error) {
    console.log(error);
}
