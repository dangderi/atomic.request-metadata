import { Database } from "@azure/cosmos";
import { CosmosConfig } from "../../src/configs/cosmos.config";
jest.mock("@azure/cosmos");

const mockQuery = jest.fn().mockImplementation(() => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    fetchAll: mockFetchAll,
  };
});

const mockFetchAll = jest.fn().mockImplementation(() => {
  return jest.fn().mockReturnThis();
});

const mockContainer = jest.fn().mockImplementation(() => {
  return {
    items: {
      query: mockQuery,
    },
  };
});

const mockDatabase = {
  container: mockContainer,
};

describe("getAllItems", () => {
  it("it should setup cosmos container", async () => {
    const cosmosConfig: CosmosConfig = new CosmosConfig(
      (mockDatabase as unknown) as Database
    );
    const a = await cosmosConfig.getAllItems(
      (jest.fn().mockReturnThis() as unknown) as string,
      (jest.fn().mockReturnThis() as unknown) as string
    );
    return expect(mockDatabase.container).toHaveBeenCalled();
  });
});
