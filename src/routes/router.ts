import { Router } from "express";
import userRouter from "./user/user.controller";
import commentRouter from "./comment/comment.controller";

const router = Router();

router.use("/user", userRouter);
router.use("/comment", commentRouter);

export default router;
