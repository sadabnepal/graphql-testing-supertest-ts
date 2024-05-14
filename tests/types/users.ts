export type genderType = 'male' | 'female';

export type statusType = 'active' | 'inactive';

export interface IUserOmittedID extends Omit<IUser, 'id'> { }

export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: genderType;
    status: statusType;
}

export interface IUsers {
    users: {
        totalCount: number;
        nodes: IUser[]
    }
}

export interface IUserCreate {
    createUser: {
        user: IUser
    }
}

export interface IUserUpdate {
    updateUser: {
        user: IUser
    }
}

export interface IUserDelete {
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