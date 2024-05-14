import { userResponseFields } from './fragments';

export const queryUsersWithNodeDirectivePayload = (includeNodes = true) => {
    return `{
        users {
            totalCount
            nodes @include (if: ${includeNodes}) {
                ${userResponseFields}
            }
        }
    }`;
};