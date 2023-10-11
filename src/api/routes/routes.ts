/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { calculatorController } from './../controllers/calculator.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { userController } from './../controllers/users.controller';
import type { RequestHandler, Router } from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ICalculator": {
        "dataType": "refObject",
        "properties": {
            "user": {"dataType":"string"},
            "expression": {"dataType":"string","required":true},
            "result": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegisterPayload": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "name": {"dataType":"string"},
            "repeatPassword": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IUserPayload": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "name": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/calculator/save',
            ...(fetchMiddlewares<RequestHandler>(calculatorController)),
            ...(fetchMiddlewares<RequestHandler>(calculatorController.prototype.save)),

            function calculatorController_save(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    payload: {"in":"body","name":"payload","required":true,"ref":"ICalculator"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new calculatorController();


              const promise = controller.save.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/calculator/get-history',
            ...(fetchMiddlewares<RequestHandler>(calculatorController)),
            ...(fetchMiddlewares<RequestHandler>(calculatorController.prototype.getHistory)),

            function calculatorController_getHistory(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new calculatorController();


              const promise = controller.getHistory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/calculator/get-history-by-user',
            ...(fetchMiddlewares<RequestHandler>(calculatorController)),
            ...(fetchMiddlewares<RequestHandler>(calculatorController.prototype.getHistoryByUser)),

            function calculatorController_getHistoryByUser(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    userId: {"in":"query","name":"userId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new calculatorController();


              const promise = controller.getHistoryByUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/calculator/get-some-history',
            ...(fetchMiddlewares<RequestHandler>(calculatorController)),
            ...(fetchMiddlewares<RequestHandler>(calculatorController.prototype.getSomeHistory)),

            function calculatorController_getSomeHistory(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    limit: {"in":"query","name":"limit","required":true,"dataType":"double"},
                    skip: {"in":"query","name":"skip","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new calculatorController();


              const promise = controller.getSomeHistory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/user/register',
            ...(fetchMiddlewares<RequestHandler>(userController)),
            ...(fetchMiddlewares<RequestHandler>(userController.prototype.register)),

            function userController_register(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    payload: {"in":"body","name":"payload","required":true,"ref":"IRegisterPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new userController();


              const promise = controller.register.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/user/login',
            ...(fetchMiddlewares<RequestHandler>(userController)),
            ...(fetchMiddlewares<RequestHandler>(userController.prototype.login)),

            function userController_login(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    payload: {"in":"body","name":"payload","required":true,"ref":"IUserPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new userController();


              const promise = controller.login.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/user/logout',
            ...(fetchMiddlewares<RequestHandler>(userController)),
            ...(fetchMiddlewares<RequestHandler>(userController.prototype.logout)),

            function userController_logout(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    payload: {"in":"body","name":"payload","required":true,"ref":"IUserPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new userController();


              const promise = controller.logout.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/user/change-password',
            ...(fetchMiddlewares<RequestHandler>(userController)),
            ...(fetchMiddlewares<RequestHandler>(userController.prototype.changePassword)),

            function userController_changePassword(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    payload: {"in":"body","name":"payload","required":true,"ref":"IUserPayload"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new userController();


              const promise = controller.changePassword.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/user/get-all',
            ...(fetchMiddlewares<RequestHandler>(userController)),
            ...(fetchMiddlewares<RequestHandler>(userController.prototype.getAll)),

            function userController_getAll(request: any, response: any, next: any) {
            const args = {
                    sendResponse: {"in":"res","name":"401","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"resp":{"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"message":{"dataType":"string","required":true},"success":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":[true]},{"dataType":"enum","enums":[false]}],"required":true}},"required":true}}},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new userController();


              const promise = controller.getAll.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200)
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
