import { expect } from 'chai';
import { createUserData, updateUserData } from 'data/faker';
import { config } from 'dotenv';
import { mutateGraphQl, queryGraphQl } from 'helper/apiUtils';
import { queryUsers } from 'payload/directives';
import { createUserPayload, deleteUserPayload, updateUserPayload } from 'payload/mutation';
import { queryAllUserPayload, queryUserByIdPayload } from 'payload/queries';
import { INonExistingUserError, IUser, IUserCreate, IUserDelete, IUserUpdate, IUsers } from 'types/users';
config();

const TOKEN = process.env.GO_RES_USER_TOKEN;

const createRandomUser = createUserData;

describe('go rest graphql tests', () => {

    let userId: number;

    it('should query all users', async () => {
        const response = await queryGraphQl(TOKEN, queryAllUserPayload);
        expect(response.statusCode).equal(200);

        const responseData: IUsers = response.body.data;

        expect(responseData).not.undefined;
        expect(responseData.users.totalCount).a('number');
        expect(responseData.users.nodes).length.to.be.greaterThan(0);

        responseData.users.nodes.forEach((user) => {
            expect(user.id).a('number');
            expect(user.name).a('string');
            expect(user.email).a('string').that.contains('@');
            expect(user.gender).a('string').that.include.oneOf(['male', 'female']);
            expect(user.status).a('string').that.include.oneOf(['active', 'inactive']);
        });

    });

    it('should create user', async () => {

        const response = await mutateGraphQl(TOKEN, createUserPayload(createRandomUser));
        expect(response.statusCode).equal(200);

        const responseData: IUserCreate = response.body.data;

        userId = responseData.createUser.user.id;
        console.log('----------------------------');
        console.log('created user => id: ', userId);
        console.log('----------------------------');

        expect(responseData.createUser).not.to.be.null;
        expect(responseData.createUser.user.id).a('number').to.be.not.null;
        expect(responseData.createUser.user.name).equal(createRandomUser.name);
        expect(responseData.createUser.user.gender).equal(createRandomUser.gender);
        expect(responseData.createUser.user.email).equal(createRandomUser.email);
        expect(responseData.createUser.user.status).equal(createRandomUser.status);
    });

    it('should query user by id', async () => {

        const response = await queryGraphQl(TOKEN, queryUserByIdPayload(userId));
        expect(response.statusCode).equal(200);

        expect(response.body.data).not.undefined;
        const user: IUser = response.body.data.user;

        console.log('----------------------------');
        console.log('fetched user => id: ', userId);
        console.log('----------------------------');

        expect(user.id).a('number');
        expect(user.name).equal(createRandomUser.name);
        expect(user.email).equal(createRandomUser.email);
        expect(user.gender).equal(createRandomUser.gender);
        expect(user.status).equal(createRandomUser.status);
    });

    it('should update user by id', async () => {

        const payload = updateUserData(userId);

        const response = await queryGraphQl(TOKEN, updateUserPayload(payload));
        expect(response.statusCode).equal(200);

        expect(response.body.data).not.undefined;

        const responseData: IUserUpdate = response.body.data;

        console.log('----------------------------');
        console.log('updated user => id: ', userId);
        console.log('----------------------------');

        expect(responseData.updateUser).not.to.be.null;
        expect(responseData.updateUser.user.id).equal(userId);
        expect(responseData.updateUser.user.name).equal(payload.name);
        expect(responseData.updateUser.user.gender).equal(payload.gender);
        expect(responseData.updateUser.user.email).equal(payload.email);
        expect(responseData.updateUser.user.status).equal(payload.status);

    });

    it('should delete user', async () => {
        const response = await queryGraphQl(TOKEN, deleteUserPayload(userId));
        expect(response.statusCode).equal(200);

        expect(response.body.data).not.undefined;

        const responseData: IUserDelete = response.body.data;

        console.log('----------------------------');
        console.log('deleted user => id: ', userId);
        console.log('----------------------------');

        expect(responseData.deleteUser).not.to.be.null;
        expect(responseData.deleteUser.user.id).equal(userId);
    });

    it('should query non existing user by id', async () => {

        const response = await queryGraphQl(TOKEN, queryUserByIdPayload(userId));
        expect(response.statusCode).equal(200);

        expect(response.body.data.user).to.be.null;
        const responseData: INonExistingUserError = response.body;

        console.log('----------------------------');
        console.log('not found user => id: ', userId);
        console.log('----------------------------');

        expect(responseData.errors).not.to.be.null;
        expect(responseData.errors).length.greaterThan(0);
        expect(responseData.errors[0].message).equal('Resource not found!');
        expect(responseData.errors[0].locations).to.be.an('array');
    });

    it('should query user count only using directives', async () => {
        const response = await queryGraphQl(TOKEN, queryUsers(false));
        expect(response.statusCode).equal(200);

        const responseData: IUsers = response.body.data;

        expect(responseData).not.undefined;
        expect(responseData.users.totalCount).a('number');
        expect(responseData.users.nodes).to.be.undefined;
    });

    it('should query user with all nodes using directives', async () => {
        const response = await queryGraphQl(TOKEN, queryUsers(true));
        expect(response.statusCode).equal(200);

        const responseData: IUsers = response.body.data;

        expect(responseData).not.undefined;
        expect(responseData.users.totalCount).a('number');
        expect(responseData.users.nodes).length.to.be.greaterThan(0);
    });

});