export default class BadRequestError extends Error {
    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    getMessage() {
        return this.message;
    }
}
