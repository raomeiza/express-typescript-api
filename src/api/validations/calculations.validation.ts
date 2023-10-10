import { ICalculator } from '../../interface/calculator'

const calculatorValidation = (calculator: ICalculator) => {

    if (!calculator.expression) {
       throw ({message: 'Expression is required', status: 400});
    }

    if (!calculator.result) {
       throw ({message: 'Result is required', status: 400});
    }

    return false;
};

export default calculatorValidation;