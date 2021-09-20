import axios from "axios";
import log4js from "../utils/default.logger";

class DataAccess {
    private logger = log4js.getLogger("DataAccess");
    private dataAccess = process.env["DATA_ACCESS_BASE_URL"];

    public async getRequestTypes(correlationId: string): Promise<any | null> {
        const query = {
            table: "REQUEST_TYPE",
            column: [
                "INSERT_USER AS insertUser",
                "INSERT_PROCESS AS insertProcess",
                "UPDATE_USER AS updateUser",
                "UPDATE_PROCESS AS updateProcess"
            ]
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
            headers: headers,
            }
        );
        return response.data;
    }
    public async getRequestStatuses(correlationId: string): Promise<any | null> {
        const query = {
            table: "APP_VALUE_LIST",
            select: [
                "CODE",
                "DESCRIPTION"
            ],
            where: [{
                "key": "LIST_TYPE",
                "operator": "=",
                "value": "REQ_STATUS"
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }
    public async getSecUsers( correlationId: string, userId: string ): Promise<any | null> {
        const query = {
            table: "SEC_USER",
            select: "*",
            where: [{
                "key": "USER_ID",
                "operator": "LIKE",
                "value": `${userId}%`
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getRequestUsers( correlationId: string, userId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP",
            select: "*",
            where: [{
                "key": "LOOKUP_CODE",
                "operator": "LIKE",
                "value": `${userId}%`
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }    

    public async getRequestAssigneeUsers( correlationId: string, userId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_ASS_USER_LOOKUP",
            select: "*",
            where: [{
                "key": "LOOKUP_CODE",
                "operator": "LIKE",
                "value": `${userId}%`
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }        

    public async getNoteTypes( correlationId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP  ",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async policyDepartments( correlationId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP  ",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getNoteCategories( correlationId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP  ",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getWrapUpCodes( correlationId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP  ",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getRequestDepartments( correlationId: string ): Promise<any | null> {
        const query = {
            table: "REQUEST_DEPARTMENT",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getRequestHistories( correlationId: string ): Promise<any | null> {
        const query = {
            table: "V_REQUEST_USER_LOOKUP  ",
            select: "*",
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getFormats( correlationId: string ): Promise<any | null> {
        const query = {
            table: "APP_VALUE_LIST",
            select: [
                "CODE",
                "DESCRIPTION"
            ],
            where: [{
                "key": "LIST_TYPE",
                "operator": "=",
                "value": "REQ_FORMAT"
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }

    public async getPriorities( correlationId: string ): Promise<any | null> {
        const query = {
            table: "APP_VALUE_LIST",
            select: [
                "CODE",
                "DESCRIPTION"
            ],
            where: [{
                "key": "LIST_TYPE",
                "operator": "=",
                "value": "REQ_FORMAT"
            }],
            limit: 100
        };
        const headers = {
            Accept: "application/json",
            "X-Organisation-Correlation-Id": correlationId,
        };
        this.logger.debug("SQL: ", query, "correlationId: ", correlationId);
        const response = await axios.post(
            `${this.dataAccess}/query-builder`,
            query,
            {
                headers: headers,
            }
        );
        return response.data;
    }    
}

export default new DataAccess();
