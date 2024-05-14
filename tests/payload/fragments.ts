export const userFragments = `fragment userFragments on user {
    id
    name
    gender
    email
    status
}`;

export const userResponseFields = `id
    name
    gender
    email
    status`;

//TODO: enhance this
export const fragmentBuilder = (fragmentName: string, fragmentObject: string, fieldType: string) => {
    return `fragment ${fragmentName} on ${fieldType} {
        ${fragmentObject}
    }`;
};