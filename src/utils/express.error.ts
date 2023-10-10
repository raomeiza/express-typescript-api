import express from "express";
import { ValidateError } from "tsoa";
import { BASE_URL } from "../config";
// handle express errors
const errorHandler = function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Express.Response | void {
  // if its not request for a file, then redirect to the frontend app
  
  if (err.status === 404) {
    if (req.url.indexOf('.') === -1) {
      console.log('req.url', req.url);
      res.redirect(`${BASE_URL}/app?original_url=${req.url}`);
      return;
    }
    return res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
  if (err instanceof ValidateError) {
    return res.status(422).json({
      success:false,
      message: "Validation Failed",
      errorData: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  } 
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
  // handle not found errors
  next();
}

export default errorHandler;