import { Router } from "express";
import { createNode, findNodes, getNode } from "../controllers/nodeControllers"
const nodeRouter = Router();

nodeRouter.get("/", (req, res) => {
    res.send("Routes");
});

nodeRouter.route("/").post(createNode);
nodeRouter.route("/find").get(findNodes);
nodeRouter.route(":/nodeId").get(getNode);

export default nodeRouter;