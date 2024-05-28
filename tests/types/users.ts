type Gender = 'male' | 'female';
type Status = 'active' | 'inactive';

export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: Gender;
    status: Status;
}

export interface IUsers {
    users: {
        totalCount: number;
        nodes: IUser[]
    }
}

export interface IUserCreateRequest extends Omit<IUser, 'id'> { }

export interface IUserCreateResponse {
    createUser: {
        user: IUser
    }
}

export interface IUserUpdateResponse {
    updateUser: {
        user: IUser
    }
}

export interface IUserDeleteResponse {
    deleteUser: {
        user: IUser
    }
}

export interface INonExistingUserError {
    errors: [
        {
            message: string;
            locations: [
                {
                    line: number;
                    column: number;
                }
            ];
            path: string[];
            extensions: {
                code: string;
                result: [
                    {
                        fieldName: string;
                        messages: string[];
                    }
                ]
            }
        }
    ];
}