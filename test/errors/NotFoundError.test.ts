import NotFoundError from "../../src/errors/NotFoundError";

describe("NotFoundError", () => {
  it("it should return a successResponse", async () => {
    const message: string = "NotFoundError";
    const error: NotFoundError = new NotFoundError(message);
    return expect(error.getMessage()).toBe(message);
  });
});