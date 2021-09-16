import dataAccessService from "../../src/services/dataaccess.service";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getRequestTypes", () => {
  it("it should call data access connector to get request types ", async () => {
    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve(jest.fn().mockReturnThis())
    );
    await dataAccessService.getRequestTypes((jest.fn().mockReturnThis() as unknown) as string);
    return expect(mockedAxios.post).toHaveBeenCalled();
  });
});
