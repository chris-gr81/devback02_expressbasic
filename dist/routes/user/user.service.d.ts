import { CreateUserDTO, PatchUserDTO, PutUserDTO, User } from "./user.type.";
export declare function getUserById(id: string): User;
export declare function getCommentsByUserId(userId: string, skip?: number, take?: number): import("./user.type.").Comment[];
export declare function createUser(user: CreateUserDTO): User;
export declare function deleteUserById(id: string): void;
export declare function putUserById(id: string, user: PutUserDTO): User;
export declare function patchUserById(id: string, user: PatchUserDTO): User;
export declare function updateUserById(id: string, name?: string, age?: number): User;
//# sourceMappingURL=user.service.d.ts.map