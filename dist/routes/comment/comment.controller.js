"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentRouter = (0, express_1.Router)();
commentRouter.get("/:id", (req, res) => {
    res.status(200).json({ message: "Get comment by Id" });
});
exports.default = commentRouter;
//# sourceMappingURL=comment.controller.js.map