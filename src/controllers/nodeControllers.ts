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

function findNodes(req: Request, res: Response) {
    const { key, value } = req.query;
    if (!key || !value) {
      res.status(400).json({ message: "key or value is not passed in query" });
    }
    console.log(key, value);
    if (typeof key === "string" && typeof value === "string") {
      let result = GRAPH.findNodes(key, value);
      console.log(result);
      res.status(200).json(result);
    }
}

function getNode(req: Request, res: Response) {
  const nodeId = req.params.nodeId;
  const node = GRAPH.getNode(nodeId);
  if (!node) {
    res.status(404).json({ error: "Node not found" });
  }
  res.json(node);
}

function deleteNode(req: Request, res: Response) {
  const nodeId = req.params.nodeId;
  if (nodeId === "") {
    res.status(400).json({ message: "nodeId is not passed in params" });
  }
  const result = GRAPH.deleteNode(nodeId);
  if (result) {
    res.status(200).json({ message: `nodeId is deleted ${nodeId}` });
  } else {
    res.status(200).json({ message: `node is not found` });
  }
}
export { createNode, findNodes, getNode, deleteNode };