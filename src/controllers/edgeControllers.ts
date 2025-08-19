import { Request, Response } from "express";
import GRAPH from "../utils/constants";

function createEdge(req: Request, res: Response) {
  try {
    const { fromNodeId, toNodeId, properties } = req.body;
    if (fromNodeId === "" || toNodeId == "") {
      res.status(400).json({ message: "from or to id is not passed" });
    }
    let edgeId = GRAPH.addEdge(fromNodeId, toNodeId, properties);
    res.status(201).json({
      message: `edge created at ${edgeId}`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
}

export { createEdge };