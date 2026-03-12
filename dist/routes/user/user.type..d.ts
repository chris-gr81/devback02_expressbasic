export type User = {
    id: string;
    name: string;
    age: number;
    comments: Comment[];
};
export type Comment = {
    id: number;
    userId: number;
    text: string;
};
export type CreateUserDTO = Omit<User, "id" | "comments">;
export type PutUserDTO = CreateUserDTO;
export type PatchUserDTO = Partial<PutUserDTO>;
//# sourceMappingURL=user.type..d.ts.map