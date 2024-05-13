export const createUserPayload = (name: string, gender: 'male' | 'female', email: string, status: 'active' | 'inactive') => {
    return `mutation {
        createUser(
            input: {
                name: "${name}"
                gender: "${gender}"
                email: "${email}"
                status: "${status}"
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


export const updateUserPayload = (id: number, name: string, gender: 'male' | 'female', email: string, status: 'active' | 'inactive') => {
    return `mutation {
        updateUser(
            input: {
                id: ${id}
                name: "${name}"
                gender: "${gender}"
                email: "${email}"
                status: "${status}"
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

export const deleteUserPayload = (id: string | number) => {
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