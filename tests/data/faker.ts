import { faker } from '@faker-js/faker';
import { IUser, IUserCreateRequest } from 'types/users';

export const createUserData: IUserCreateRequest = {
    name: faker.person.fullName(),
    gender: faker.person.sexType(),
    email: faker.internet.email(),
    status: 'active'
};

export const updateUserData = (userId: number): IUser => {
    return {
        id: userId,
        name: faker.person.fullName(),
        gender: faker.person.sexType(),
        email: faker.internet.email(),
        status: 'active'
    };
};