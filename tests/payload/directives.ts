import { userResponseFields } from './fragments';

export const queryUsers = (includeNodes: boolean) => {
    return `{
        users {
            totalCount
            nodes @include (if: ${includeNodes}) {
                ${userResponseFields}
            }
        }
    }`;
};