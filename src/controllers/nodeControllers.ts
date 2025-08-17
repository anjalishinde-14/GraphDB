import { Request, Response } from "express";
import GRAPH from "../utils/constants";

function createNode(req: Request, res: Response) {
  const properties = req.body;
  if (!properties) {
    res.status(400).json({ message: "node creation failed please give properties to node" });
  }
  let nodeid = GRAPH.addNodes(properties);
  res.status(201).json({ message: `node created at ${nodeid}` });
}
export default createNode;