import React from 'react'
import { useNavigate } from 'react-router'

function Cart() {
  const navigate = useNavigate()
  return (
    <div className='items-center'>
      <h1 className='text-2xl text-slate-600'>Your cart is empty.</h1>
      <button className='btn btn-secondary' onClick={() => navigate("/products")}>Continue Shopping</button>
    </div>
  )
}

export default Cart