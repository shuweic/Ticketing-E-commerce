import {ValidationError} from 'express-validator';

export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        // private here equal to this.errors = errors; and initialize the errors property
        super();
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
