import sampleService from "../../src/services/request.metadata.service";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getSample", () => {
  it("it should call the sample atomic service", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(jest.fn().mockReturnThis())
    );
    await sampleService.getRequestStatuses(jest.fn().mockReturnThis());
    return expect(mockedAxios.get).toHaveBeenCalled();
  });
});
