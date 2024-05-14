import { IUser, IUserOmittedID } from "../types/users";

export const createUserPayload = (data: IUserOmittedID) => {
    return `mutation {
        createUser(
            input: {
                name: "${data.name}"
                gender: "${data.gender}"
                email: "${data.email}"
                status: "${data.status}"
            }
        ) {
            user {
                id
                name
                gender
                email
                status
            }
        }
    }`;
};


export const updateUserPayload = (data: IUser) => {
    return `mutation {
        updateUser(
            input: {
                id: ${data.id}
                name: "${data.name}"
                gender: "${data.gender}"
                email: "${data.email}"
                status: "${data.status}"
            }
        ) {
            user {
                id
                name
                gender
                email
                status
            }
        }
    }`;
};

export const deleteUserPayload = (id: number) => {
    return `mutation {
        deleteUser(
            input: {
                id: ${id}
            }
        ) {
            user {
                id
                name
                gender
                email
                status
            }
        }
    }`;
};