import { Router } from "express";

const commentRouter = Router();

commentRouter.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get comment by Id" });
});

export default commentRouter;
