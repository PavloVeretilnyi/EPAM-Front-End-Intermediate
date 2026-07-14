import isValid from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

export function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}