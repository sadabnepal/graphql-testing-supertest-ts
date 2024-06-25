import { config } from 'dotenv';
import { join } from 'path';
config();

const environment = process.env.ENV;
if (!environment) throw new Error('please pass the environment variable. Options: | dev | stage | prod |');

config({ path: join(process.cwd(), 'tests', 'env', `${environment}.env`) });

export const ENV = {
    BASEURL: process.env.BASEURL,
    ENDPOINT: '/v2/graphql'
};