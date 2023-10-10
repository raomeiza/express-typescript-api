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

};

export default new CalculatorService();