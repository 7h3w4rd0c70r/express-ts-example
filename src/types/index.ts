
declare namespace Express {
    interface Request {
        userdata?: {
            _id?: string;
            username?: string;
            name?: string;
            email?: string;
        };
    }

    interface Response {
        out?: any;
    }
}