import React from 'react'
import ProductCard from '../components/ProductCard'
import {mockProductData} from '../data/mockProductData'

function Products() {
  return (
    <div className='flex flex-wrap gap-16'>
      {
        mockProductData.map((product) => <ProductCard product={product}/>)
      }
    </div>
  )
}

export default Products