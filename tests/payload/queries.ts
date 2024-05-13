export const queryAllUserPayload = `{
    users {
        totalCount
        nodes {
            email
            gender
            id
            name
            status
        }
    }
}`;

export const queryUserByIdPayload = (id: string | number) => {
    return `query User {
        user(id: "${id}") {
            email
            gender
            id
            name
            status
        }
    }`;
};