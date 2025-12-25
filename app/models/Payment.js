import mongoose from "mongoose";
const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    name: { type: String },
    to_username: { type: String, required: true },
    oid: { type: String, required: true, unique: true },
    message: { type: String },
    amount: { type: Number, required: true },
    email: { type: String, required: false },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;