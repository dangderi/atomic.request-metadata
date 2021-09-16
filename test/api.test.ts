import request from "supertest";
import app from "../src/app";

describe("GET /resources/one", () => {
    it("should return 200 OK", () => {
        return request(app).get("/health-check")
            .expect(200);
    });
});
