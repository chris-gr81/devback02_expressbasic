"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
exports.getCommentsByUserId = getCommentsByUserId;
exports.createUser = createUser;
exports.deleteUserById = deleteUserById;
exports.putUserById = putUserById;
exports.patchUserById = patchUserById;
exports.updateUserById = updateUserById;
const USER_DATABASE = [
    {
        id: "1",
        name: "Maxim",
        age: 20,
        comments: [{ id: 1, userId: 1, text: "Hello World" }],
    },
    {
        id: "2",
        name: "Moritz",
        age: 25,
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
function createUser(user) {
    if (!user.name) {
        throw new Error("Name is required");
    }
    if (!user.age) {
        throw new Error("Age is required");
    }
    const id = crypto.randomUUID();
    const newUser = { id, name: user.name, comments: [], age: user.age };
    USER_DATABASE.push(newUser);
    return newUser;
}
function deleteUserById(id) {
    const index = USER_DATABASE.findIndex((user) => user.id === id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    USER_DATABASE.splice(index, 1);
}
function putUserById(id, user) {
    if (!user.name) {
        throw new Error("Name ist required");
    }
    if (!user.age) {
        throw new Error("Age is required");
    }
    return updateUserById(id, user.name, user.age);
}
function patchUserById(id, user) {
    if (!user.name && !user.age) {
        throw new Error("Name or Age is required for update");
    }
    return updateUserById(id, user.name, user.age);
}
function updateUserById(id, name, age) {
    const user = getUserById(id);
    if (name) {
        user.name = name;
    }
    if (age) {
        user.age = age;
    }
    return user;
}
//# sourceMappingURL=user.service.js.map