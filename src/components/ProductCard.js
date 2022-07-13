import React from 'react'
import { useNavigate } from 'react-router'

function ProductCard({product}) {
  const navigate = useNavigate()
  return (
    <div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src= {`https://api.lorem.space/image/shoes?w=400&h=225`} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{product.title}</h2>
            <p>{product.shortDescription}</p>
            <div class="card-actions">
            <button class="btn btn-primary mt-2" onClick={() => navigate("/cart")}>Add to Cart</button>
            <button class="btn btn-primary mt-2" onClick={() => navigate(`/products/${product.id}`)}>View Product</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard