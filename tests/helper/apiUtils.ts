import supertest from 'supertest';

export const queryGraphQl = async (token: string, graphQLQuery: string) => {
    const response = await supertest('https://gorest.co.in/public')
        .post('/v2/graphql')
        .set({ 'authorization': `Bearer ${token}` })
        .send({ query: graphQLQuery });
    return response;
};

export const mutateGraphQl = async (token: string, mutationPayload: string) => {
    const response = await supertest('https://gorest.co.in/public')
        .post('/v2/graphql')
        .set({ 'authorization': `Bearer ${token}` })
        .send({ query: mutationPayload });
    return response;
}; 