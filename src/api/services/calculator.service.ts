import { ICalculator } from '../../interface/calculator'
import calculatorModel from '../models/calculator.model'

const failedToFecthHistory = 'Failed to fetch history'

class CalculatorService {
  // pre registers a user with the given email or mobile
  async Save(resource: ICalculator) {
    try {
      return await calculatorModel.create(resource)

    } catch (err: any) {
      throw ({ message: 'failed to save', error: err, status: 404 })
    }
  }

  // get all history
  async GetHistory() {
    try {

      return await calculatorModel.find()
    } catch (err: any) {
      throw ({ message: failedToFecthHistory, error: err, status: 404 })
    }
  }

  // get a users calculation history
  async GetHistoryByUser(userId: string) {
    try {
      return await calculatorModel.find({ userId })
    } catch (err: any) {
      throw ({ message: failedToFecthHistory, error: err, status: 404 })
    }
  }

  // get a limited number of users calculation history
  async GetSomeHistory(limit: number, skip: number) {
    try {
      return await calculatorModel.find().limit(limit).skip(skip || 0)
    } catch (err: any) {
      throw ({ message: failedToFecthHistory, error: err, status: 404 })
    }
  }
};

export default new CalculatorService();