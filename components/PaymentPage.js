"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useParams } from "next/navigation"
import { Amiko } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/app/actions/useractions'

const PaymentPage = () => {
    const [paymentfrom, setPaymentfrom] = useState({
        amount: "",
        name: "",
        message: ""
    });
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const { username } = useParams();
    // const { data: session } = useSession();

    useEffect(() => {
        getData();
    }, [])



    const handleChange = (e) => {
        setPaymentfrom({
            ...paymentfrom, [e.target.name]: e.target.value
        });
    }

    const getData = async(params)=>{
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
    }
    const pay = async (amount) => {
        if (!amount) {
            alert('Please enter an amount');
            return;
        }
        let a = await initiate(amount, username, paymentfrom)
        let orderId = a.id;
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Funds Do", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": paymentfrom.name || "", //your customer's name
                "email": "",
                "contact": "" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='text-white'>
                <section className="container mx-auto mt-6 overflow-hidden">
                    <div className="w-full mx-auto">

                        {/* <!-- Cover Image --> */}
                        <img
                            src={currentuser.coverpic}
                            alt="Profile cover"
                            className="w-full rounded-2xl xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] h-[9.5rem] object-cover"
                        />

                        {/* <!-- Profile Image --> */}
                        <div className="w-full mx-auto flex justify-center">
                            <img
                                src={currentuser.profilepic}
                                alt="User profile"
                                className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem]
        outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl
        relative xl:bottom-[7rem] md:bottom-[6rem] bottom-[4.3rem]"
                            />
                        </div>

                        {/* <!-- Profile Info --> */}
                        <div className="xl:w-[80%] md:w-[94%] w-[92%] mx-auto flex flex-col gap-4 items-center
                relative xl:-top-[6rem] md:-top-[4rem] -top-[2.2rem]">

                            <h1 className="text-center text-3xl font-serif text-gray-800 dark:text-white">
                                @{username}
                            </h1>

                            <p className="text-gray-700 dark:text-gray-400 text-md text-center max-w-4xl">
                                Content creator sharing tech insights, tutorials, and community-driven projects.
                                Join the journey and support the work through engagement and contributions.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 text-sm text-center max-w-4xl">
                                9,719 members • 82 posts • ₹{payments.reduce((total, p) => total + p.amount, 0) / 100} raised
                            </p>

                            {/* <!-- Stats Cards --> */}
                            <div className="w-full flex gap-7 justify-center items-center mt-10 flex-wrap">

                                {/* <!-- Audience / Fans --> */}
                                <div className="w-1/3 min-w-[140px] h-86 flex flex-col px-4
                    border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-sm">
                                    <span className="text-2xl font-semibold my-2 text-gray-800 dark:text-white">Suppoters</span>
                                    <span className="text-sm text-gray-300 mb-4 overflow-auto">
                                        <ul>
                                            {payments.length===0 && <li>No payments yet. Be the first to support!</li>}
                                            {payments.map((p, i) => (
                                                <li key={i} className='flex flex-wrap gap-1 items-center mb-2'>
                                                    <img width={33} src="avatar.gif" alt="" />
                                                    {p.name ? p.name : "Anonymous"} donated <span className='font-bold'>₹{(p.amount/100).toFixed(2)}</span> {p.message && <>with a message <span className='font-bold'>"{p.message}"</span></>}
                                                </li>
                                            ))}
                                        </ul>
                                    </span>
                                </div>

                                {/* <!-- Coins --> */}
                                <div className="w-1/3 min-w-[140px] h-86 flex flex-col p-4
                    border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-sm">
                                    <span className="text-2xl font-semibold text-gray-800 dark:text-white">Make a Payment</span>
                                    <div className='w-full gap-2 flex-col flex'>
                                        <input type="number" onChange={handleChange} value={paymentfrom.amount} name='amount' placeholder="Enter amount in ₹" className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white" />
                                        <input type="text" onChange={handleChange} value={paymentfrom.name} name='name' placeholder="Enter Your Name" className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white" />
                                        <input type="text" onChange={handleChange} value={paymentfrom.message} name='message' placeholder="Enter Your Message" className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white" />
                                        <button type="button" onClick={() => pay(paymentfrom.amount * 100)} className="text-white mt-1 bg-[#285ee7] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 box-border border border-transparent focus:outline-none font-medium leading-5 rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50">
                                            <img src="pngwing.com.png" width={30} alt="" />
                                            Pay with Razorpay
                                        </button>
                                    </div>
                                    <div className='flex gap-4 mt-2'>
                                        <button className="mt-2 p-2 bg-slate-800 text-white rounded-md hover:bg-blue-600 " onClick={() => pay(1000)}>Pay ₹10</button>
                                        <button className="mt-2 p-2 bg-slate-800 text-white rounded-md hover:bg-blue-600 " onClick={() => pay(2000)}>Pay ₹20</button>
                                        <button className="mt-2 p-2 bg-slate-800 text-white rounded-md hover:bg-blue-600 " onClick={() => pay(3000)}>Pay ₹30</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default PaymentPage
