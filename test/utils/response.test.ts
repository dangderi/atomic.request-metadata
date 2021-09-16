import * as responses from "../../src/utils/response";
import httpMocks from "node-mocks-http";

describe("Response", () => {

    it("should return badRequestResponse with http code 400", () => {
        const response = httpMocks.createResponse();
        const result = responses.badRequestResponse(response, "bad-response");
        expect(result.statusCode).toBe(400);
        expect(result.getHeader("content-type")).toBe("application/json");
    });

    it("should return resourceNotFoundResponse with http code 404", () => {
        const response = httpMocks.createResponse();
        const result = responses.resourceNotFoundResponse(response, "resource-not-found");
        expect(result.statusCode).toBe(404);
        expect(result.getHeader("content-type")).toBe("application/json");
    });

    it("should return unexpectedErrorResponse with http code 500", () => {
        const response = httpMocks.createResponse();
        const result = responses.unexpectedErrorResponse(response, "unexpected-error");
        expect(result.statusCode).toBe(500);
        expect(result.getHeader("content-type")).toBe("application/json");
    });
    
    it("should return success response with http code 200", () => {
        const response = httpMocks.createResponse();
        const result = responses.successResponse(response, "success");
        expect(result.statusCode).toBe(200);
        expect(result.getHeader("content-type")).toBe("application/json");
    });
});
