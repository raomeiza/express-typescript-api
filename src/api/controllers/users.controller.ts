import { sendError, sendSuccess } from '../../utils/response-handler'
import userService from '../services/user.services'
import tokenizer from '../../utils/tokenizer'
import * as validations from '../validations/user.validation'
//@ts-ignore
import { Route, Res, Request,  Patch, Get, TsoaResponse, Delete, Header, Body, Response, Tags, Example, Controller, Post } from 'tsoa'
import { IUserPayload, IUserData, IUserSuccessResponse, IFetchUsers, ILoginPayload } from '../../interface/user'

const userData:IUserData = {
    "email": "john@doe.com",
    "name": "john doe",
    "createdAt": "2021-09-15T17:07:15.000Z",
    "updatedAt": "2021-09-15T17:07:15.000Z",
    "id": "6142b4a3b0d7f4f8a7f8b7f6"
}

const userPayload: IUserPayload = {
  email: 'john@doe.com',
  password: '12345',
  name: 'john doe'
}

const loginPayload: IUserPayload = {
  email: 'john@doe.com',
  password: '12345'
}

const userResponse: IUserSuccessResponse = {
  success: true,
  message: 'user registered successfully',
  data:userData,
  token: 'token'
}

const userLogout = {
  ...userResponse,
  token: undefined
}

const fetchUsersResponse:IFetchUsers = {
  success: true,
  message: 'users fetched successfully',
  data: [userData],
  token: 'token'
}

@Route('user')
@Tags('USER')
export class userController extends Controller {
  /**
   * Used for user registratiion.
   * Supply the user's name, unique email and password
   * @function Register a user
   * @implements userService.Register
   * @param email user email
   * @param password user password
   * @param name user's name
   * @return {Promise<object>} user profile jsoned object
   */
  @Example<IUserPayload>(userPayload)
  @Post('register')
  @Example<IUserSuccessResponse>(userResponse)
  @Response(201, 'user registered successfully')
  public async register(
    @Res() sendResponse: TsoaResponse<400 | 500 | 401, { resp: { success: true | false, message: string, data: any } }>,
    @Body() payload: IUserPayload 
  ): Promise<any> {
    try {
      validations.register(payload) // validate the payload
      const user = await userService.Register(payload)
      let token = await tokenizer.signToken(user)
      return await sendSuccess({ ...user, token }, 'user registered successfully' )
    } catch (err: any) {
      return sendError(sendResponse, err)
    }
  }

  /**
   * @function Login a user
   * @implements userService.Login
   * @param email user email
   * @param password user password
   * @return {Promise<object>} user profile jsoned object
   */
  @Example<ILoginPayload>(loginPayload)
  @Post('login')
  @Example<IUserSuccessResponse>(userResponse)
  @Response(201, 'user logged in successfully')
  public async login(
    @Res() sendResponse: TsoaResponse<400 | 500 | 401, { resp: { success: true | false, message: string, data: any } }>,
    @Body() payload: IUserPayload,
  ): Promise<any> {
    try {
      validations.login(payload) // validate the payload
      
      const user = await userService.Login(payload)
      let token = await tokenizer.signToken(user)
      return sendSuccess({ ...user, token }, 'user logged in successfully' )
    } catch (err: any) {
      return sendError(sendResponse, err)
    }
  }


}

//export the controller
export default new userController();