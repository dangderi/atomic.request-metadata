import * as apiController from "../../src/controllers/api";
import { Response, Request } from "express";
import * as responseWrap from "../../src/utils/response";

const mockRequestWithoutHeader = () => {
  const req = {} as any;
  req.header = jest.fn().mockReturnValue(null);
  req.params = jest.fn().mockReturnValue(
      {
        requestId: 123
      }
  );
  req.body = {};

  return req;
};

const mockRequestWithHeader = () => {
  const req = {} as any;
  req.header = jest.fn().mockReturnValue({
    "X-Organisation-Correlation-Id": "123",
  });
  req.params = jest.fn().mockReturnValue({
    ID: 123,
  });
  return req;
};

const mockResponse = () => {
  const res = {} as any;
  res.status = jest.fn().mockReturnValue(res);
  res.contentType = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.body = {};
  return res;
};

describe("getNoteTypes", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getNoteTypes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getPolicyDepartments", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getPolicyDepartments(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getEnquiries", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getEnquiries(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getNoteCategories", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getNoteCategories(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getWrapUpCodes", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getWrapUpCodes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getPolicyMetaData", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getPolicyMetaData(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getDepartments", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getDepartments(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getSecUsers", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getSecUsers(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getRequestTypes", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getRequestTypes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getRequestHistories", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getRequestHistories(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getRequestStatuses", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getRequestStatuses(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getPriorities", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getPriorities(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getFormats", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getFormats(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getResolutions", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getResolutions(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});
describe("getAdditionalInfo", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.getAdditionalInfo(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});

describe("healthCheck", () => {
  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await apiController.healthCheck(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });
});


