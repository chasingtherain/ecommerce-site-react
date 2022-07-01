import React from 'react'
import { useNavigate } from 'react-router'

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
            <button class="btn btn-primary" onClick={() => navigate("/products/content")}>Add to Cart</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard