'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DonationCheckoutForm from '../DonationCheckoutForm/DonationCheckoutForm';
const stripePromise = loadStripe('pk_test_51OFa8mLyPuxrVtxVxj4uYM8JVPorLKehNtolkNf38r2CJS99FWfRz7IF9o3EWE6E5B1YuybNl0bB1RAhzR230FOi00S1TL9GlV');
const DonationStripe = ({pay}) => {
    const [clientSecretData,seclientSecretData]=useState(null)
    useEffect(() => {
        // axios.post('http://localhost:5000/createPaymentIntent', https://pet-adopter-backend.vercel.app/createPaymentIntent
        axios.post('https://pet-adopter-backend.vercel.app/createPaymentIntent', { price: pay})
            .then((res) => {
                seclientSecretData(res.data.clientSecret)
            })
    }, [])
  return (
    <>
      <Elements stripe={stripePromise}>
                <DonationCheckoutForm pay={pay} clientSecretData={clientSecretData}/>
            </Elements>
    </>
  )
}

export default DonationStripe
