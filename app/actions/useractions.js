"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import connectDB from "@/app/db/connectdb"
import User from "../models/User"
import { Odibee_Sans } from "next/font/google"

export const initiate = async (amount, to_username, paymentfrom) => {
    try {
        await connectDB();
        
        console.log("Initiate params:", { amount, to_username, paymentfrom });

        var instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        let options = {
            amount: Number.parseInt(amount),
            currency: "INR",
        };
        
        console.log("Creating order with options:", options);
        let x = await instance.orders.create(options);
        console.log("Order created:", x.id);

        const paymentData = {
            oid: x.id,
            amount: x.amount,
            to_username: to_username,
            name: paymentfrom.name,
            message: paymentfrom.message,
        };
        
        console.log("Creating payment record:", paymentData);
        await Payment.create(paymentData);
        console.log("Payment record created");
        
        return x;
    } catch(error) {
        console.error("Error in initiate:", error);
        throw error;
    }
}


export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    let user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB();
    const payments = await Payment
        .find({ to_username: username, done: true })
        .sort({ amount: -1 })
        .lean();

    return JSON.parse(JSON.stringify(payments));
};


export const updateprofile = async (oldusername, data) => {
    try {
        await connectDB();
        console.log("UpdateProfile params:", { oldusername, data });
        
        let ndata = data
        if (oldusername !== ndata.username) {
            let u = await User.findOne({ username: ndata.username });
            if(u){
                return {error: "Username already taken"};
            }
        }

        const result = await User.updateOne({username: oldusername}, ndata)
        console.log("Profile updated:", result);
        return {success: true};
    } catch(error) {
        console.error("Error in updateprofile:", error);
        return {error: error.message};
    }
}