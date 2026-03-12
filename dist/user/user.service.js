"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
exports.getCommentsByUserId = getCommentsByUserId;
const USER_DATABASE = [
    {
        id: 1,
        name: "Maxim",
        comments: [{ id: 1, userId: 1, text: "Hello World" }],
    },
    {
        id: 2,
        name: "Moritz",
        comments: [
            { id: 2, userId: 2, text: "Moritz world" },
            { id: 3, userId: 2, text: "Test" },
        ],
    },
];
function getUserById(id) {
    const user = USER_DATABASE.find((user) => user.id === id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }
    return user;
}
function getCommentsByUserId(userId, skip = 0, take = 20) {
    const user = getUserById(userId);
    const comments = user.comments.slice(skip, skip + take);
    return comments;
}
//# sourceMappingURL=user.service.js.map