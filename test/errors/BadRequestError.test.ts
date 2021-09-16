import BadRequestError from "../../src/errors/BadRequestError";

describe("BadRequestError", () => {
  it("it should return a successResponse", async () => {
    const message: string = "BadRequestError";
    const error: BadRequestError = new BadRequestError(message);
    return expect(error.getMessage()).toBe(message);
  });
});

