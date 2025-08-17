import { Router } from "express";
import createNode from "../controllers/nodeControllers"
const nodeRouter = Router();

nodeRouter.get("/", (req, res) => {
    res.send("Routes");
});

nodeRouter.route("/").post(createNode);

export default nodeRouter;