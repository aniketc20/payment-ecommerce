import React from 'react'
import { useState } from 'react'

const ShippingInfo = () => {
  const [selectCountry, setselectCountry] = useState(true)
  const [country, setCountry] = useState("Poland")
  return (
    <div className='m-6'>
      <h1>
        Shipping and Payment
      </h1>
      <div className='flex mt-12'>
        <button className='bg-teal-400 text-white hover:bg-teal-500 m-1 p-2 rounded-full w-[30%]'>
          Log in
        </button>
        <button className='p-2 rounded-full hover:bg-gray-300 border-gray-200 border w-[30%]'>
          Sign up
        </button>
      </div>
      <h1 className='mt-6'>
        Shipping Information
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[500px] mt-6">
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='Email'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='Address'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='First Name'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='City'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='Last Name'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='Postal code/Zip'>

            </input>
        </div>
        <div>
            <input className='border rounded rounded-full w-full p-2' placeholder='Phone number'>

            </input>
        </div>
<div className="relative inline-block text-left">
  <div>
    <button onClick={() => {setselectCountry(!selectCountry)}} type="button" className="inline-flex w-full justify-between rounded-full p-2 border border-gray-300 shadow-sm bg-white text-gray-500 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500" 
      id="menu-button" aria-expanded="true" aria-haspopup="true">
      {country}
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  <div hidden={selectCountry} className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
      <h1 onClick={ () => {setCountry("India");setselectCountry(!selectCountry)}} 
        className="cursor-pointer hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
        India
      </h1>
      <h1 onClick={ () => {setCountry("Poland");setselectCountry(!selectCountry)}} 
        className="cursor-pointer hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
        Poland
      </h1>
    </div>
  </div>
</div>

</div>
    </div>
  )
}

export default ShippingInfo