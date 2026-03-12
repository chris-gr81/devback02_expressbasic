import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getCommentsByUserId,
  getUserById,
  patchUserById,
  putUserById,
  updateUserById,
} from "./user.service";

const userRouter = Router();

userRouter.get("/:id", (req, res) => {
  const userId: string = req.params.id;
  try {
    res.status(200).json({ user: getUserById(userId) });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.get("/:id/comments", (req, res) => {
  try {
    const userId = req.params.id;
    console.log(req.query);
    const skip = req.query.skip ? parseInt(req.query.skip as string) : 0;
    const take = req.query.take ? parseInt(req.query.take as string) : 20;
    res.status(200).json({ comments: getCommentsByUserId(userId, skip, take) });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.post("/", (req, res) => {
  const name = req.body.name;
  try {
    const newUser = createUser(req.body);
    res.header("Location", `/api/user/${newUser.id}`);
    res.status(201).json({ user: newUser });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.delete("/:id", (req, res) => {
  const userId = req.params.id;
  try {
    deleteUserById(userId);
    res.status(204).json({});
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.put("/:id", (req, res) => {
  try {
    const user = putUserById(req.params.id, {
      name: req.body.name,
      age: req.body.age,
    });
    res.status(200).json({ user });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.patch("/:id", (req, res) => {
  try {
    const user = patchUserById(req.params.id, {
      name: req.body.name,
      age: req.body.age,
    });
    res.status(200).json({ user });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

export default userRouter;
