import React from 'react'
import { useNavigate } from 'react-router'

function ProductDetails() {
    const navigate = useNavigate()
    
    return (
    <div>
        <div><button className='btn btn-secondary' onClick={() => navigate('/')}>Back to products</button></div>
        <div>
            <div></div>
            <div>
                <p>item title</p>
                <p>item price</p>
                <p>item description</p>
                <p>item availability</p>
                <p>item colors</p>
                <p>- 1 +</p>
                <button className='btn btn-secondary'>Add to Cart</button>
            </div>
        </div>

    </div>
    )
}

export default ProductDetails