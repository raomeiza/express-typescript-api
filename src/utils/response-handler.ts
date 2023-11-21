const env = process.env.NODE_ENV
// success message formate


export interface ISuccessResponse {
  success: true,
  message: string,
  code: number,
  data: any,
  errorStack?: any
}

export interface IErrorResponse {
  success: false,
  message: string,
  error: object,
  code: number,
  errorStack?: any
}

const sendSuccess = (data: any, message = 'success', code = 200) : ISuccessResponse => {
  return {
    success: true,
    message: message,
    code: code,
    data: data
  }
}

// Error message handler and custom message for special error
const sendError = async (sendResponse: any/* a method for sending the response */, error: any) : Promise<IErrorResponse> => {
  let resp: IErrorResponse = {
    success: false,
    message: '',
    error: error.error || error,
    code: error.status || 500
  }

  // Handling Mongoose Validation Error
  if (error.error == 'castError') {
    resp.error = await handleMongooseValidationError(error);
    resp.message = error.message || 'Invalid request data. Please review request and try again.'
    resp.code = 422
  }
  // handling duplicate key error
  else if (error.error && error.error.code && error.error.code == 11000) {
    resp.message = `${Object.keys(error.error.keyValue)[0]} already exists`
    resp.error = { message: 'Duplicate key error' , fields: error.error.keyValue}
    resp.code = 409
  }
  // Handling jwt error
  else if (error.name && error.name.toLowerCase() == 'tokenexpirederror') {
    resp.message = 'Token expired, please login again'
    resp.error = {message: "Session expired, please login again"}
    resp.code = 401
  }

  else if (error.name === 'JsonWebTokenError') {
    resp.error = {message: "Invalid or expired token. Please login again"}
      resp.message = 'Invalid or expired token. Please login again',
      resp.code = 401
  }

  // Handling Expired JWT error
  else if (error.name === 'TokenExpiredError') {
    resp.error = {message: "Session expired, please login again"}
      resp.message = 'Token expired, please login again',
      resp.code = 401
  }

  // handling api token and key error
  else if (error.name === 'InvalidTokenError') {
    resp.message = 'Invalid token.';
    resp.code = 401
    resp.error = error.data || {}
  }

  // and finally 
  resp.success = false;
  if (env && env.toLocaleLowerCase() === 'production') {
    resp.errorStack = error.stack || error
  }
  if (resp.message == '') resp.message = error.message || 'Internal server error';
  return sendResponse(resp.code, resp);
};


//handle field formatting, empty fields, and mismatched passwords
const handleMongooseValidationError = async (err: any) => {
  try {
    let errors = {};
    err.details.forEach((element: any) => {
      errors = { [element.context.label]: element.message, ...errors };

    });
    return errors
  } catch (ex: any) {
    return err;
  }
}
export { sendError, sendSuccess }