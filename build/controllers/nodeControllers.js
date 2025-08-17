"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../utils/constants"));
function createNode(req, res) {
    const properties = req.body;
    if (!properties) {
        res.status(400).json({ message: "node creation failed please give properties to node" });
    }
    let nodeid = constants_1.default.addNodes(properties);
    res.status(201).json({ message: `node created at ${nodeid}` });
}
exports.default = createNode;
