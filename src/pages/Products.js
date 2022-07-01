import React from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <div className='flex flex-wrap gap-16'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default Products