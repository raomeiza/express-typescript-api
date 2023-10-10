import { sendError, sendSuccess } from '../../utils/response-handler'
import calculatorService from '../services/calculator.service'
import tokenizer from '../../utils/tokenizer'
import validations from '../validations/calculations.validation'
//@ts-ignore
import { Route, Header, Request, Res, Query, Get, TsoaResponse, Body, Response, Tags, Example, Controller, Post } from 'tsoa'
import { ICalculator, FetchResponse } from '../../interface/calculator'

const fetchResponse: FetchResponse = {
  "success": true,
  "message": "calculation saved successfully",
  "data": [
    {
      "expression": "1+1",
      "result": '2',
      "timestamp": "2021-09-15T17:07:15.000Z",
      "id": "6142b4a3b0d7f4f8a7f8b7f6"
    },
  ],
  "token": 'token'
}

@Route('calculator')
@Tags('CALCULATOR')
export class calculatorController extends Controller {
  /**
   * @function save - Save a calculation
   * @implements - calculatorService.Save
   * @param userId - user id
   * @param expression - calculation expression
   * @param result - calculation result
   * @return {Promise<object>} - calculation jsoned object
   */
  @Example({ userId: '6142b4a3b0d7f4f8a7f8b7f6', expression: '1+1', result: 2 })
  @Post('save')
  @Example<FetchResponse>(fetchResponse)
  @Response(201, 'calculation saved successfully')
  public async save(
    @Res() sendResponse: TsoaResponse<400 | 500 | 401, { resp: { success: true | false, message: string, data: any } }>,
    @Body() payload: ICalculator,
    @Request() req: any,
  ): Promise<any> {
    try {
      let token = req.headers.authorization
      const user = await tokenizer.verifyToken(token)
      if (!user) throw ({ message: 'User not authorized', status: 401 })

      validations(payload) // validate the payload

      const entry = await calculatorService.Save(payload)

      token = await tokenizer.signToken(token) // refresh token
      return sendSuccess({ ...entry, token }, 'user registered successfully')
    } catch (err: any) {
      return sendError(sendResponse, err)
    }
  }

}

//export the controller
export default new calculatorController();