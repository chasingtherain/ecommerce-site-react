import React from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import ProductDetails from './ProductDetails'

function ProductCard() {
  const navigate = useNavigate()
  return (
    <div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src= {`https://api.lorem.space/image/shoes?w=400&h=225`} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary" onClick={() => navigate("/products/content")}>Buy Now</button>
            </div>
        </div>
        </div>
    <Routes> 
      <Route path= "content" element={<ProductDetails/>}/>
    </Routes>
    </div>
  )
}

export default ProductCard