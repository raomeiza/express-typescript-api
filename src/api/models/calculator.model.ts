import mongoose, {Schema, Document} from "mongoose";
import { ICalculator } from "../../interface/calculator";

const CalculatorSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    expression: {type: String, required: true},
    result: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
});

export default mongoose.model<ICalculator>('Calculator', CalculatorSchema);