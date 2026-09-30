import dotenv from 'dotenv';
dotenv.config();

const uniqueLastName = `Karki${Date.now()}`
export const testData = {
    validLogin: {
        username: process.env.ADMIN_USERNAME || 'Admin', 
        password: process.env.ADMIN_PASSWORD || 'admin123',
    },

    invalidLogin: {
        username: 'WrongUser',
        password: 'WrongPassword',
    },

    newEmployee: {
        firstName: 'Pratham', 
        middleName: '',
        lastName: uniqueLastName,
    },

       searchEmployee: `Pratham ${uniqueLastName}`,
};