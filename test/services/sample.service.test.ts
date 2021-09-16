import sampleService from "../../src/services/sample.service";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getSample", () => {
  it("it should call the sample atomic service", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(jest.fn().mockReturnThis())
    );
    await sampleService.getSample(jest.fn().mockReturnThis());
    return expect(mockedAxios.get).toHaveBeenCalled();
  });
});
