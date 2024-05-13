import { faker } from '@faker-js/faker';
import { genderType, statusType } from '../types/faker';

export const createUserData = {
    name: faker.person.fullName(),
    gender: 'male' as genderType,
    email: faker.internet.email(),
    status: 'active' as statusType
};

export const updateUserData = {
    name: faker.person.fullName(),
    gender: 'female' as genderType,
    email: faker.internet.email(),
    status: 'active' as statusType
};