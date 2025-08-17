"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodeControllers_1 = __importDefault(require("../controllers/nodeControllers"));
const nodeRouter = (0, express_1.Router)();
nodeRouter.get("/", (req, res) => {
    res.send("Routes");
});
nodeRouter.route("/").post(nodeControllers_1.default);
exports.default = nodeRouter;
