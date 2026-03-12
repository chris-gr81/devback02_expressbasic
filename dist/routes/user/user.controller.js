"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = require("./user.service");
const userRouter = (0, express_1.Router)();
userRouter.get("/:id", (req, res) => {
    const userId = req.params.id;
    try {
        res.status(200).json({ user: (0, user_service_1.getUserById)(userId) });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
userRouter.get("/:id/comments", (req, res) => {
    try {
        const userId = req.params.id;
        console.log(req.query);
        const skip = req.query.skip ? parseInt(req.query.skip) : 0;
        const take = req.query.take ? parseInt(req.query.take) : 20;
        res.status(200).json({ comments: (0, user_service_1.getCommentsByUserId)(userId, skip, take) });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
userRouter.post("/", (req, res) => {
    const name = req.body.name;
    try {
        const newUser = (0, user_service_1.createUser)(name);
        res.header("Location", `/api/user/${newUser.id}`);
        res.status(201).json({ user: newUser });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
userRouter.delete("/:id", (req, res) => {
    const userId = req.params.id;
    try {
        (0, user_service_1.deleteUserById)(userId);
        res.status(204).json({});
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
userRouter.put("/:id", (req, res) => {
    try {
        const user = (0, user_service_1.putUserById)(req.params.id, {
            name: req.body.name,
            age: req.body.age,
        });
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
userRouter.patch("/:id", (req, res) => {
    try {
        const user = (0, user_service_1.patchUserById)(req.params.id, {
            name: req.body.name,
            age: req.body.age,
        });
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.default = userRouter;
//# sourceMappingURL=user.controller.js.map