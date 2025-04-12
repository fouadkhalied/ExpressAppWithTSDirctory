"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const notFoundHandler = (req, res) => {
    res.status(404).json({
        status: 'error',
        statusCode: 404,
        message: 'Resource not found'
    });
};
exports.notFoundHandler = notFoundHandler;
