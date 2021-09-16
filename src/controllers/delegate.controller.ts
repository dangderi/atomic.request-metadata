"use strict";
import { Response, Request } from "express";
import getFormatsSample from "../models/getFormatsSample.json";
import getResolution from "../models/getResolutionSample.json";
import getAdditionalInfoSample from "../models/getAdditionalInfoSample.json";

import NotFoundError from "../errors/NotFoundError";

import services from "../services/sample.service";

import { QueryResult } from "../models/model";
import {
    successResponse,
    badRequestResponse,
    unexpectedErrorResponse
} from "../utils/response";

class DelegateController {
    private correlationIdHeaderName = "X-Organisation-Correlation-Id";

    /**
     * @route get /note-types
     */
    public getNoteTypes = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getNoteTypes(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /enquiries
     */
    public getEnquiries = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getEnquiries(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /note-cat-depts
     */
    public getPolicyDepartments = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getPolicyDepartments(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /departments
     */
    public getRequestDepartments = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getRequestDepartments(correlationId, Number(req.query.page), Number(req.query.limit), req.query.id as string);
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /note-categories
     */
    public getNoteCategories = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getNoteCategories(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /wrapup-codes
     */
    public getWrapUpCodes = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getWrapUpCodes(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /sec-users
     */
    public getSecUsers = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }

        const userId = req.query.userId as string;
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        try {
            const items = await services.getSecUsers(correlationId, page, limit, userId);
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /request-types
     */
    public getRequestTypes = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        const departmentId = req.query.departmentId as string;
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        try {
            const forceSecondary = req.params.forceSecondary;
            let items: QueryResult;
            if ( forceSecondary ) {
                items = !!departmentId ? await services.getRequestTypes( correlationId, page, limit, departmentId ) : await services.getRequestTypes( "", page, limit, departmentId);
            }
            else {
                try {
                    const requestTypes = !!departmentId ? await services.getRequestTypes( correlationId, page, limit, departmentId ) : await services.getRequestTypes(correlationId, page, limit);
                    if (requestTypes.length === 0) {
                        items = !!departmentId ? await services.getRequestTypes(correlationId, page, limit, departmentId ) : await services.getRequestTypes(correlationId, page, limit );
                    }
                } catch (err) {
                    items = !!departmentId ? await services.getRequestTypes( correlationId, page, limit, departmentId  ) : await services.getRequestTypes( correlationId, page, limit );
                }
            }
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /request-histories
     */
    public getRequestHistories = async (req: Request, res: Response) => {
        const correlationId = req.header(this.correlationIdHeaderName);

        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const items = await services.getRequestHistories(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, items);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /request-statuses
     */
    public async getRequestStatuses(req: Request, res: Response) {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const requestStatuses = await services.getRequestStatuses(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, requestStatuses);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /priorities
     */
    public async getPriorities(req: Request, res: Response) {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            return successResponse(res, services.getPriorities(correlationId, Number(req.query.page), Number(req.query.limit)));
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /formats
     */
    public async getFormats(req: Request, res: Response) {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            const formats = await services.getFormats(correlationId, Number(req.query.page), Number(req.query.limit));
            return successResponse(res, formats);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /resolutions
     */
    public async getResolutions(req: Request, res: Response) {
        const correlationId = req.header(this.correlationIdHeaderName);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            return successResponse(res, getResolution);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /additionalinfo
     */
    public async getAdditionalInfo(req: Request, res: Response) {
        const correlationId = req.header(this.correlationIdHeaderName);
        const requestType = Number(req.query.requestType);
        if (!correlationId) {
            return badRequestResponse(
                res,
                `Missing header ${this.correlationIdHeaderName}`
            );
        }
        try {
            return successResponse(res, getAdditionalInfoSample);
        } catch (error) {
            console.log(error.stack);
            if (error instanceof NotFoundError) {
                return badRequestResponse(res, error.getMessage());
            } else {
                return unexpectedErrorResponse(res, error.message);
            }
        }
    };

    /**
     * @route get /health-check
     */
    public healthCheck = (req: Request, res: Response) => {
        return successResponse(res, {
            status: 200,
            message: "OK",
        });
    };
}

export default new DelegateController();
