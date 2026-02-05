import React, { useState } from 'react'
import ProductForm from '../ProductForm/ProductForm'
import ProductTable from '../ProductTable/ProductTable'

export default function ProductManagement() {
    const [products,setProducts] = useState([])
    const handleAddProducts = newProducts => {
        setProducts([...products,newProducts])
    }
  return (
    <div>
        <ProductForm handleAddProducts={handleAddProducts}/>
        <ProductTable products={products} setProducts={setProducts}/>
    </div>
  )
}
