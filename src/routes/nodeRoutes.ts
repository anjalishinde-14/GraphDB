import { Router } from "express";
import { createNode, findNodes } from "../controllers/nodeControllers"
const nodeRouter = Router();

nodeRouter.get("/", (req, res) => {
    res.send("Routes");
});

nodeRouter.route("/").post(createNode);
nodeRouter.route("/find").get(findNodes);

export default nodeRouter;