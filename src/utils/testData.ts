import dotenv from 'dotenv';
dotenv.config();
export const testData = {
    validLogin: {
        username: process.env.ADMIN_USERNAME || 'Admin', 
        password: process.env.ADMIN_PASSWORD || 'admin123',
    },

    invalidLogin: {
        username: 'WrongUser',
        password: 'WrongPassword',
    },

    searchEmployee: 'Peter Mac Anderson',
    newEmployee: {
        firstName: 'Pratham', 
        middleName: '',
        lastName: 'Karki',
    },
};