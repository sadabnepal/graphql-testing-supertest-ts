import { ENV } from 'env/manager';
import supertest from 'supertest';

export const queryGraphQl = async (token: string, graphQLQuery: string) => {
    try {
        const response = await supertest(ENV.BASEURL)
            .post(ENV.ENDPOINT)
            .set({ 'authorization': `Bearer ${token}` })
            .send({ query: graphQLQuery });
        return response;
    } catch (error) {
        console.error(`Error making request to ${ENV.BASEURL + ENV.ENDPOINT}:`, error);
        throw error;
    }
};

export const mutateGraphQl = async (token: string, mutationPayload: string) => {
    try {
        const response = await supertest(ENV.BASEURL)
            .post(ENV.ENDPOINT)
            .set({ 'authorization': `Bearer ${token}` })
            .send({ query: mutationPayload });
        return response;
    } catch (error) {
        console.error(`Error making request to ${ENV.BASEURL + ENV.ENDPOINT}:`, error);
        throw error;
    }
}; 