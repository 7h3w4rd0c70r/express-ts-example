
export type User = {
    _id?: string;
    username?: string;
    password?: string;
    email?: string;
    name?: string;
};

export type Todo = {
    _id?: string;
    title?: string;
    description?: string;
    isDone?: boolean;
};
