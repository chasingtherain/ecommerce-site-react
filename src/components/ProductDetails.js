import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { mockProductData } from '../data/mockProductData'

function ProductDetails() {
    const navigate = useNavigate()
    const location = useLocation()
    const [quantity, setQuantity] = useState(1)
    // filter and extract current product as an object
    const product = mockProductData.filter((product) => product.id === +(location.pathname.slice(-1))).map(product => product)[0]


    return (
    <div>
        <div><button className='btn btn-secondary' onClick={() => navigate('/products')}>Back to products</button></div>
        <div>
            <div>
                <p>{product.title}</p>
                <p>{`$${product.price}`}</p>
                <p>{product.longDescription}</p>
                <p>Suitable for: {product.skill}</p>
                <p>Availability: {product.stock}</p>
                <p>item colors</p>
                <div className='flex ml-2 gap-2'>
                    <button className='text-2xl' onClick={() => {if(quantity) setQuantity(quantity-1)}}>-</button>
                    <p> {quantity}</p>
                    <button className='text-2xl' onClick={() => {setQuantity(quantity+1)}}>+</button>
                </div>
                <button className='btn btn-secondary'>Add to Cart</button>
            </div>
        </div>

    </div>
    )
}

export default ProductDetails