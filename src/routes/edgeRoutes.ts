import { Router } from "express";
import { createEdge } from "../controllers/edgeControllers";

const edgeRouter = Router();

edgeRouter.get("/", (req, res) => {
    res.send("Hello from edges routes");
});

edgeRouter.route("/").post(createEdge);

export default edgeRouter;