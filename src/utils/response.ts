import { Response } from "express";

export function badRequestResponse(res: Response, message: string) {
  return res
    .status(400)
    .contentType("application/json")
    .send(
      JSON.stringify(
        {
          status: 400,
          message: message,
        },
        null,
        2
      )
    );
}

export function resourceNotFoundResponse(res: Response, message: string) {
  return res
    .status(404)
    .contentType("application/json")
    .send(
      JSON.stringify(
        {
          status: 404,
          message: message,
        },
        null,
        2
      )
    );
}

export function successResponse(res: Response, body: any) {
  return res
    .status(200)
    .contentType("application/json")
    .send(JSON.stringify(body, null, 2));
}


export function unexpectedErrorResponse(res: Response, message: string) {
  return res
    .status(500)
    .contentType("application/json")
    .send(
      JSON.stringify(
        {
          status: 500,
          message: message,
        },
        null,
        2
      )
    );
  }