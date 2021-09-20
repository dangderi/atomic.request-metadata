import log4js from "../utils/default.logger";
import dataEdgeService from "../services/dataedge.service";
import dataAccessService from "../services/dataaccess.service";
import {QueryResult} from "../models/model";
import getEnquiriesSample from "../models/getEnquiriesSample.json";

class RequestMetadataService {
  private logger = log4js.getLogger("RequestMetadataService");
  private headers = {
    "Accept": "application/json"
  };

  public async getRequestStatuses(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const requestStatuses = await dataEdgeService.getRequestStatuses(correlationId);
      this.logger.debug("HTTP response: ", requestStatuses);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": requestStatuses.length,
        "page": page,
        "limit": limit,
        "data": requestStatuses.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestStatuses(correlationId);
    }
  }

  public async getSecUsers(correlationId: string, page: number = 1, limit: number = 100, userId: string): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const users = await dataEdgeService.getSecUsers( correlationId, userId);
      this.logger.debug("HTTP response: ", userId);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": users.length,
        "page": page,
        "limit": limit,
        "data": users.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getSecUsers( correlationId, userId);
    }
  }

  // This INCLUDES terminated users
  // Purposefully not reading from CosmosDB
  // Uses Diamond specific view "V_REQUEST_USER_LOOKUP"
  public async getRequestUsers(correlationId: string, page: number = 1, limit: number = 100, userId: string): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      throw new Error("CosmosDB does not have the equivalent table");
      const users = await dataEdgeService.getSecUsers( correlationId, userId);
      this.logger.debug("HTTP response: ", userId);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": users.length,
        "page": page,
        "limit": limit,
        "data": users.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestUsers( correlationId, userId);
    }
  }

  // This EXCLUDES the terminated users
  // Purposefully not reading from CosmosDB
  // Uses Diamond specific view "V_REQUEST_ASS_USER_LOOKUP"
  public async getRequestAssigneeUsers(correlationId: string, page: number = 1, limit: number = 100, userId: string): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      throw new Error("CosmosDB does not have the equivalent table");
      const users = await dataEdgeService.getSecUsers( correlationId, userId);
      this.logger.debug("HTTP response: ", userId);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": users.length,
        "page": page,
        "limit": limit,
        "data": users.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestAssigneeUsers( correlationId, userId);
    }
  }


  public async getNoteTypes(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const noteTypes = await dataEdgeService.getNoteTypes( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(noteTypes)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": noteTypes.length,
        "page": page,
        "limit": limit,
        "data": noteTypes.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getNoteTypes( correlationId ) ;
    }
  }

  public async getPolicyDepartments(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const policyDepartments = await dataEdgeService.getPolicyDepartments( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(policyDepartments)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": policyDepartments.length,
        "page": page,
        "limit": limit,
        "data": policyDepartments.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.policyDepartments( correlationId ) ;
    }
  }

  public async getEnquiries(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    return getEnquiriesSample;
  }

  public async getNoteCategories(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const categories = await dataEdgeService.getNoteCategories( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(categories)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": categories.length,
        "page": page,
        "limit": limit,
        "data": categories.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getNoteCategories( correlationId ) ;
    }
  }

  public async getWrapUpCodes(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const wrapupCodes = await dataEdgeService.getWrapUpCodes( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(wrapupCodes)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": wrapupCodes.length,
        "page": page,
        "limit": limit,
        "data": wrapupCodes.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getWrapUpCodes( correlationId ) ;
    }
  }

  public async getRequestDepartments(correlationId: string, page: number = 1, limit: number = 100, id: string = ""): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const requestDepartments = await dataEdgeService.getRequestDepartments( correlationId, id );
      this.logger.debug(`HTTP response: ${JSON.stringify(requestDepartments)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": requestDepartments.length,
        "page": page,
        "limit": limit,
        "data": requestDepartments.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestDepartments( correlationId ) ;
    }
  }

  public async getRequestHistories(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const requestDepartments = await dataEdgeService.getRequestHistories( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(requestDepartments)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": requestDepartments.length,
        "page": page,
        "limit": limit,
        "data": requestDepartments.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestHistories( correlationId ) ;
    }
  }

  public async getRequestTypes(correlationId: string, page: number = 1, limit: number = 100, departmentId: string = ""): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const requestTypes = await dataEdgeService.getRequestTypes( departmentId, correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(requestTypes)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": requestTypes.length,
        "page": page,
        "limit": limit,
        "data": requestTypes.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getRequestTypes( correlationId ) ;
    }
  }

  public async getPriorities(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const priorities = await dataEdgeService.getPriorities( correlationId );
      this.logger.debug(`HTTP response: ${JSON.stringify(priorities)}`);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": priorities.length,
        "page": page,
        "limit": limit,
        "data": priorities.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
      this.logger.error(`Primary read has failed: ${error}`);
      this.logger.debug("Secondary read is initiated.");
      return await dataAccessService.getPriorities( correlationId ) ;
    }  }

  public async getFormats(correlationId: string, page: number = 1, limit: number = 100): Promise<any | null> {
    this.logger.debug(`headers: ${JSON.stringify(this.headers)}`);
    try {
      const formats = await dataEdgeService.getFormats( correlationId );
      this.logger.debug("HTTP response: ", formats);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const items: QueryResult = {
        "total": formats.length,
        "page": page,
        "limit": limit,
        "data": formats.slice(startIndex, endIndex)
      };
      return items;
    } catch( error ) {
        this.logger.error(`Primary read has failed: ${error}`);
        this.logger.debug("Secondary read is initiated.");
        return await dataAccessService.getFormats( correlationId ) ;
      }
  }
}

export default new RequestMetadataService();
