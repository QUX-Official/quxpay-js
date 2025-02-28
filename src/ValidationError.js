export class ValidationError extends Error {
    /**
     * @param {string} message - The error message describing the validation failure.
     * @param {number|string} code - A custom error code identifying the validation issue.
     */
    constructor(message, code) {
        super(message);

        /** @type {string} The name of the error. */
        this.name = "ValidationError";

        /** @type {number|string} The custom error code. */
        this.code = code;

        // Captures the stack trace for debugging purposes
        Error.captureStackTrace(this, ValidationError);
    }
}
