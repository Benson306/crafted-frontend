import React from 'react'
import Products from './Products'
import { useLocation } from 'react-router-dom'

function ProductsPerCategory() {
    const location = useLocation();
    const { category } = location.state;
  return (
    <div className='mt-10'>

        <Products category={category.category}/>
      
    </div>
  )
}

export default ProductsPerCategory
