export interface ICalculator {
  user?: string; // reference to the user that created the calculator
  expression: string; // the expression to be evaluated
  result: string; // the result of the expression
  timestamp?: Date; // the time the calculator was created
}

interface CalcEntry {
  expression: string
  result: string
  timestamp: string
  id: string
}

 interface FetchResponse {
  success: boolean
  message: string
  data: CalcEntry[]
  token: string
}
