import { IUser, IUserOmittedID } from 'types/users';
import { userFragments, userResponseFields } from './fragments';

export const createUserPayload = (data: IUserOmittedID) => {
    return `
    ${userFragments}
    mutation {
        createUser(
            input: {
                name: "${data.name}"
                gender: "${data.gender}"
                email: "${data.email}"
                status: "${data.status}"
            }
        ) {
            user {
                ...userFragments
            }
        }
    }`;
};


export const updateUserPayload = (data: IUser) => {
    return `
    ${userFragments}
    mutation {
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
                ...userFragments
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
                ${userResponseFields}
            }
        }
    }`;
};