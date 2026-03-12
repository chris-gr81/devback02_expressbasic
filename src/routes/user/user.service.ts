import { CreateUserDTO, PatchUserDTO, PutUserDTO, User } from "./user.type.";

const USER_DATABASE: User[] = [
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

export function getUserById(id: string): User {
  const user = USER_DATABASE.find((user) => user.id === id);

  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
}

export function getCommentsByUserId(userId: string, skip = 0, take = 20) {
  const user = getUserById(userId);
  const comments = user.comments.slice(skip, skip + take);
  return comments;
}

export function createUser(user: CreateUserDTO): User {
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

export function deleteUserById(id: string) {
  const index = USER_DATABASE.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error(`User with id ${id} not found`);
  }

  USER_DATABASE.splice(index, 1);
}

export function putUserById(id: string, user: PutUserDTO) {
  if (!user.name) {
    throw new Error("Name ist required");
  }
  if (!user.age) {
    throw new Error("Age is required");
  }
  return updateUserById(id, user.name, user.age);
}

export function patchUserById(id: string, user: PatchUserDTO) {
  if (!user.name && !user.age) {
    throw new Error("Name or Age is required for update");
  }
  return updateUserById(id, user.name, user.age);
}

export function updateUserById(id: string, name?: string, age?: number) {
  const user = getUserById(id);
  if (name) {
    user.name = name;
  }
  if (age) {
    user.age = age;
  }

  return user;
}
