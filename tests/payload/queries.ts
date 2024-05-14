import { userResponseFields } from './fragments';

export const queryAllUserPayload = `{
    users {
        totalCount
        nodes {
            ${userResponseFields}
        }
    }
}`;

export const queryUserByIdPayload = (id: number) => {
    return `query User {
        user(id: "${id}") {
            ${userResponseFields}
        }
    }`;
};