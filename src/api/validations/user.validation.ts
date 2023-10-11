import { IRegisterPayload, IUserPayload } from '../../interface/user'

// error messages and their status code
const shortPasswordError = {message: 'Password must be at least 6 characters', status: 400};
const nameRequiredError = {message: 'Name is required', status: 400}
const emailRequiredError = {message: 'Email is required', status: 400}
const invalidEmailErrror = {message: 'Invalid email', status: 400}
const invalidNameError = {message: 'Invalid name format', status: 400}
const passwordRequiredError = {message: 'Password is requierd', status: 400}

export const register = (user: IRegisterPayload) => {

    if (!user.name) {
        throw nameRequiredError;
    } else if (!isValidName(user.name)) {
        throw emailRequiredError
    }

    if (!user.email) {
        throw emailRequiredError
    } else if (!isValidEmail(user.email)) {
        throw invalidEmailErrror
    }
    
    if (!user.repeatPassword) {
        throw passwordRequiredError
    } else if (user.password !== user.repeatPassword) {
        throw {message: 'Passwords do not match', status: 400}
    }

    if (!user.password) {
        throw passwordRequiredError
    } else if (user.password.length < 6) {
        throw shortPasswordError
    }
};

export const update = (user: IUserPayload) => {
    
    if (user.name && !isValidName(user.name)) {
        throw invalidNameError
    }
    
    if (user.email && !isValidEmail(user.email)) {
        throw invalidEmailErrror
    }
    
    if (user.password && user.password.length < 6) {
        throw shortPasswordError
    }
};

export const login = (user: IUserPayload) => {
    
    if (!user.email) {
        throw emailRequiredError
    } else if (!isValidEmail(user.email)) {
        throw invalidEmailErrror
    }

    if (!user.password) {
        throw passwordRequiredError
    }
};

export const resetPassword = (user: IUserPayload) => {

    if (!user.password) {
        throw passwordRequiredError
    } else if (user.password.length < 6) {
        throw shortPasswordError
    }
};

export const forgotPassword = (user: IUserPayload) => {

    if (!user.email) {
        throw emailRequiredError
    } else if (!isValidEmail(user.email)) {
        throw invalidEmailErrror
    }
};

const isValidName = (name: string) => {
    // Add your name validation logic here
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(name);
};

export const isValidEmail = (email: string) => {
    // Add your email validation logic here
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
