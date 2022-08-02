import React from 'react'
import Header from './components/Header'
import PaymentMethod from './components/PaymentMethod'
import ShippingInfo from './components/ShippingInfo'
import Checkout from './components/Checkout'

const Payment = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header />
        <div className='flex'>
            <ShippingInfo />
            <PaymentMethod />
            <Checkout />
        </div>
    </div>
  )
}

export default Payment
