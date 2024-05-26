import { ENV } from 'env/manager';
import supertest from 'supertest';

export const queryGraphQl = async (token: string, graphQLQuery: string) => {
    const response = await supertest(ENV.BASEURL)
        .post(ENV.ENDPOINT)
        .set({ 'authorization': `Bearer ${token}` })
        .send({ query: graphQLQuery });
    return response;
};

export const mutateGraphQl = async (token: string, mutationPayload: string) => {
    const response = await supertest(ENV.BASEURL)
        .post(ENV.ENDPOINT)
        .set({ 'authorization': `Bearer ${token}` })
        .send({ query: mutationPayload });
    return response;
}; 