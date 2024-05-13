export const queryUsersWithNodeDirectivePayload = (includeNodes = true) => {
    return `{
        users {
            totalCount
            nodes @include (if: ${includeNodes}) {
                email
                gender
                id
                name
                status
            }
        }
    }`;
};