import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectdb";

export const POST = async (request) => {
    await connectDB();
    let body = await request.formData();
    body = Object.fromEntries(body);

    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if(!p){
        return NextResponse.json({success: false, message: "Order not found"}, {status: 400});
    }

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, process.env.KEY_SECRET);

    if (xx) {
        const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, { done: true }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentSuccess=true`);
    }
    else{
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${p.to_username}?paymentSuccess=false`);
    }
    }
