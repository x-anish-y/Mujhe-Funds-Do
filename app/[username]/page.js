"use client";
import React from 'react'
import { useParams } from "next/navigation"
import PaymentPage from '@/components/PaymentPage';

const Username = () => {
  const { username } = useParams();
  return (
    <>
      <PaymentPage username={username} />
    </>
  )
}

export default Username
