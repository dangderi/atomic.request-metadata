"use strict";

import { Response, Request } from "express";
import delegate from "./delegate.controller";
import { successResponse } from "../utils/response";

/**
 * @route get /note-types
 */
export const getNoteTypes = async (req: Request, res: Response) => {
    return delegate.getNoteTypes(req, res);
};

/**
 * @route get /note-cat-depts
 */
export const getPolicyDepartments = async (req: Request, res: Response) => {
    return delegate.getPolicyDepartments(req, res);
};

/**
 * @route get /enquiries
 */
export const getEnquiries = async (req: Request, res: Response) => {
    return delegate.getEnquiries(req, res);
};

/**
 * @route get /note-categories
 */
export const getNoteCategories = async (req: Request, res: Response) => {
    return delegate.getNoteCategories(req, res);
};

/**
 * @route get /wrapup-codes
 */
export const getWrapUpCodes = async (req: Request, res: Response) => {
    return delegate.getWrapUpCodes(req, res);
};

/**
 * @route get /departments
 */
export const getDepartments = async (req: Request, res: Response) => {
    return delegate.getRequestDepartments(req, res);
};

/**
 * @route get /sec-users
 */
export const getSecUsers = async (req: Request, res: Response) => {
    return delegate.getSecUsers(req, res);
};

/**
 * @route get /request-users
 */
 export const getRequestUsers = async (req: Request, res: Response) => {
    return delegate.getRequestUsers(req, res);
};

/**
 * @route get /request-assignee-users
 */
 export const getRequestAssigneeUsers = async (req: Request, res: Response) => {
    return delegate.getRequestAssigneeUsers(req, res);
};

/**
 * @route get /request-types
 */
export const getRequestTypes = async (req: Request, res: Response) => {
    return delegate.getRequestTypes(req, res);
};

/**
 * @route get /request-histories
 */
export const getRequestHistories = async (req: Request, res: Response) => {
    return delegate.getRequestHistories(req, res);
};

/**
 * @route get /request-statuses
 */
export const getRequestStatuses = async (req: Request, res: Response) => {
    return delegate.getRequestStatuses(req, res);
};

/**
 * @route get /priorities
 */
export const getPriorities = async (req: Request, res: Response) => {
    return delegate.getPriorities(req, res);
};

/**
 * @route get /formats
 */
export const getFormats = async (req: Request, res: Response) => {
    return delegate.getFormats(req, res);
};

/**
 * @route get /resolutions
 */
export const getResolutions = async (req: Request, res: Response) => {
    return delegate.getResolutions(req, res);
};

/**
 * @route get /additionalinfo
 */
export const getAdditionalInfo = async (req: Request, res: Response) => {
    return delegate.getAdditionalInfo(req, res);
};

/**
 * @route get /health-check
 */
export const healthCheck = (req: Request, res: Response) => {
  return successResponse(res, {
    status: 200,
    message: "OK",
  });
};
