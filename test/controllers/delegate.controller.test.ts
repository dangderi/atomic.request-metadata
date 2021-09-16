import delegateController from "../../src/controllers/delegate.controller";
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
    await delegateController.getNoteTypes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getNoteTypes(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getNoteTypes(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getPolicyDepartments", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getPolicyDepartments(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getPolicyDepartments(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getPolicyDepartments(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getEnquiries", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getEnquiries(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getEnquiries(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getEnquiries(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getNoteCategories", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getNoteCategories(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getNoteCategories(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getNoteCategories(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getWrapUpCodes", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getWrapUpCodes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getWrapUpCodes(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getWrapUpCodes(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getPolicyMetaData", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getPolicyMetaData(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getPolicyMetaData(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getPolicyMetaData(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getDepartments", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getDepartments(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getDepartments(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getDepartments(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getSecUsers", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getSecUsers(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getSecUsers(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getSecUsers(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getRequestTypes", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getRequestTypes(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getRequestTypes(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getRequestTypes(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getRequestHistories", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getRequestHistories(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getRequestHistories(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getRequestHistories(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getRequestStatuses", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getRequestStatuses(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getRequestStatuses(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getRequestStatuses(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getPriorities", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getPriorities(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getPriorities(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getPriorities(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getFormats", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getFormats(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getFormats(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getFormats(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getResolutions", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getResolutions(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getResolutions(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getResolutions(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});
describe("getAdditionalInfo", () => {

  it("it should return a successResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockReturnThis();
    await delegateController.getAdditionalInfo(req, res);
    return expect(responseWrap.successResponse).toHaveBeenCalled();
  });

  it("it should return badRequestResponse", async () => {
    const req: Request = (mockRequestWithoutHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "badRequestResponse").mockReturnThis();
    await delegateController.getAdditionalInfo(req, res);
    return expect(responseWrap.badRequestResponse).toHaveBeenCalled();
  });

  it("it should return unexpectedErrorResponse", async () => {
    const req: Request = (mockRequestWithHeader() as unknown) as Request;
    const res: Response = (mockResponse() as unknown) as Response;
    jest.spyOn(responseWrap, "successResponse").mockImplementation(() => {
      throw new Error("Mock Errors");
    });
    jest.spyOn(responseWrap, "unexpectedErrorResponse").mockReturnThis();
    await delegateController.getAdditionalInfo(req, res);
    return expect(responseWrap.unexpectedErrorResponse).toHaveBeenCalled();
  });
});



