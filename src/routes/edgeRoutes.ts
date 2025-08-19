import { Router } from "express";
import { createEdge, getEdge, deleteEdge } from "../controllers/edgeControllers";

const edgeRouter = Router();

edgeRouter.get("/", (req, res) => {
    res.send("Hello from edges routes");
});

edgeRouter.route("/").post(createEdge);
edgeRouter.route("/:edgeId").get(getEdge);;
edgeRouter.route("/:edgeId").delete(deleteEdge);


export default edgeRouter;