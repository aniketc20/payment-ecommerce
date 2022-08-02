import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between border border-b-2'>
        <div className='p-6 font-bold'>
            <h1>
                <h2 className='text-yellow-500 inline'>
                E
                </h2>
                -Shop
            </h1>
        </div>
        <div className="flex justify-evenly gap-12 p-6">
            <div>
                Men
            </div>
            <div>
                Women
            </div>
            <div>
                Kids
            </div>
        </div>
        <div className='flex gap-8 p-6'>
            <div>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default Header
