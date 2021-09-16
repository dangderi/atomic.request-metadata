import dataEdgeService from "../../src/services/dataedge.service";
import cosmosDB from "../../src/configs/cosmos.config";
jest.mock("@azure/cosmos");

describe("getRequestTypes", () => {
  it("it should call the CosmoDB to get all items ", async () => {
    jest.spyOn(cosmosDB, "getAllItems").mockReturnThis();
    await dataEdgeService.getRequestTypes((jest.fn().mockReturnThis() as unknown) as string);
    return expect(cosmosDB.getAllItems).toHaveBeenCalled();
  });
});