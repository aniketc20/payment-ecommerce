import React from 'react'
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
// key id:rzp_test_5Y5oyHyOcGwPBR
// secret: 6Btqpgmji0CVF9xdvDQFRG0m


const Checkout = () => {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {

    const options = {
      key: "rzp_test_5Y5oyHyOcGwPBR",
      amount: "3000",
      currency: "INR",
      name: "E-commerce Website",
      description: "Test Transaction",
      image: "https://thumbs.dreamstime.com/b/shopping-website-icon-basket-65019751.jpg",
      order_id: "order_K0iWdsRGvJdTa9",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Aniket Choudhary",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className='mt-6 w-[25%]'>
      <div className='flex flex-row-reverse pl-32'>
        <i className="fa fa-truck p-2 rounded-full bg-green-200"></i>
        <div className="flex-grow border-t-2 border-gray-200 mt-3"></div>
        <i className="fa fa-shopping-cart p-2 rounded-full bg-green-200" aria-hidden="true"></i>
      </div>

      <div className='mt-10'>
      <span>
        Your Cart
      </span>
      <div className='flex mt-4 justify-between'>
        <div className='flex'>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" 
            className=" mt-2 w-14 h-14 rounded-full object-cover"
            alt='shirt' />
            <div className='flex flex-col text-sm ml-3'>
            <div>
                <span>
                    T-Shirt
                </span>
            </div>
            <div>
                <span>
                    Summer vibes
                </span>
            </div>
            <div className='text-slate-400 mt-2 mr-12'>
                <span>
                    #261323
                </span>
            </div>
        </div>
        </div>
        <div>
            <span>
                $81.99
            </span>
        </div>
      </div>
      </div>

      <div className='flex mt-4 justify-between'>
        <div className='flex'>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/51c6bj0gVZL._AC._SR360,460.jpg" 
            className=" mt-2 w-14 h-14 rounded-full object-cover"
            alt='shirt' />
            <div className='flex flex-col text-sm ml-3'>
            <div>
                <span>
                    T-Shirt
                </span>
            </div>
            <div>
                <span>
                    Summer vibes
                </span>
            </div>
            <div className='text-slate-400 mt-2 mr-12'>
                <span>
                    #261323
                </span>
            </div>
        </div>
        </div>
        <div>
            <span>
                $81.99
            </span>
        </div>
      </div>

      {/* Total cost */}
      <div className='rounded-full bg-slate-200 flex justify-evenly p-3 mt-16 mx-4'>
        <span>
            Total cost
        </span>
        <span>
            $159.99
        </span>
      </div>
      <div className='flex mt-40'>
        <button onClick={handlePayment} className='bg-teal-400 text-white hover:bg-teal-500 ml-2 p-2 rounded-full w-[80%]'>
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default Checkout
