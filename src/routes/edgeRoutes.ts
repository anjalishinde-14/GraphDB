import { Router } from "express";
import { createEdge, getEdge } from "../controllers/edgeControllers";

const edgeRouter = Router();

edgeRouter.get("/", (req, res) => {
    res.send("Hello from edges routes");
});

edgeRouter.route("/").post(createEdge);
edgeRouter.get("/:edgeId",getEdge);


export default edgeRouter;