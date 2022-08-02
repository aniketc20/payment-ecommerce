import React, { useState } from 'react'
import PaypalIcon from '../assets/paypal.png'
import VisaIcon from '../assets/visa-credit-card.png'
import MasterCardIcon from '../assets/mastercard.png'
import MaestroCard from '../assets/maestro.png'
import DiscoverCardIcon from '../assets/discover.png'
import IdealCardIcon from '../assets/payment.png'
import FedExIcon from '../assets/fedex.png'
import DhlIcon from '../assets/dhl.png'
import InPostIcon from '../assets/inpost.png'
import DpdIcon from '../assets/dpd.png';

const PaymentMethod = () => {
  const [payment, setPayment] = useState("")
  const [delivery, setDelivery] = useState("")
  return (
    <div className='mt-24 ml-6'>
      <h1>
        Payment Method
      </h1>
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 mt-6 mr-16">
        <button onClick={() => { setPayment("paypal") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="paypal" ? "bg-yellow-500" : "")} >
          <img src={PaypalIcon} className='h-12 w-16' alt='shirt' />
        </button>
        <button onClick={() => { setPayment("visa") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="visa" ? "bg-yellow-500" : "")} >
          <img src={VisaIcon} className='h-12 w-16' alt='shirt'/>
        </button>
        <button onClick={() => { setPayment("master") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="master" ? "bg-yellow-500" : "")}>
          <img src={MasterCardIcon} className='h-12 w-16' alt='shirt' />
        </button>
        <button onClick={() => { setPayment("maestro") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="maestro" ? "bg-yellow-500" : "")}>
          <img src={MaestroCard} className='h-12 w-16' alt='shirt' />
        </button>
        <button onClick={() => { setPayment("discover") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="discover" ? "bg-yellow-500" : "")}>
          <img src={DiscoverCardIcon} className='h-12 w-16' alt='shirt' />
        </button>
        <button onClick={() => { setPayment("ideal") }} className={"rounded-full border-gray-200 border px-4 hover:bg-yellow-500 " +  (payment==="ideal" ? "bg-yellow-500" : "")}>
          <img src={IdealCardIcon} className='h-12 w-16' alt='shirt' />
        </button>
      </div>
      
      <h1 className='mt-12 mr-16'>
        Delivery Method
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-6 mr-16">
        <button onClick={() => { setDelivery("inPost") }} className={"rounded-full border-gray-200 border justify-evenly items-center flex hover:bg-yellow-500 " +  (delivery==="inPost" ? "bg-yellow-500" : "")}>
          <img src={InPostIcon} className='h-12 w-16' />
          <h1 className=''>
            $10.00
          </h1>
        </button>
        <button onClick={() => { setDelivery("Dpd") }} className={"rounded-full border-gray-200 border justify-evenly items-center flex hover:bg-yellow-500 " +  (delivery==="Dpd" ? "bg-yellow-500" : "")}>
          <img src={DpdIcon} className='h-12 w-16' />
          <h1 className=''>
            $12.00
          </h1>
        </button>
        <button onClick={() => { setDelivery("Dhl") }} className={"rounded-full border-gray-200 border justify-evenly items-center flex hover:bg-yellow-500 " +  (delivery==="Dhl" ? "bg-yellow-500" : "")}>
          <img src={DhlIcon} className='h-12 w-16' />
          <h1 className=''>
            $20.00
          </h1>
        </button>
        <button onClick={() => { setDelivery("FedEx") }} className={"rounded-full border-gray-200 border justify-evenly items-center flex hover:bg-yellow-500 " +  (delivery==="FedEx" ? "bg-yellow-500" : "")}>
          <img src={FedExIcon} className='h-12 w-16' />
          <h1 className=''>
            $15.00
          </h1>
        </button>
      </div>
      <div className='flex flex-row-reverse mt-24'>
        <button className='p-2 rounded-full hover:bg-gray-300 border-black border w-[60%]'>
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
