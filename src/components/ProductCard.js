import React from 'react'

function ProductCard({name,price}) {
    //console.log(props)
  return (
    <div className="product-style" >
        <h1 >{name}</h1>
        <h2>{price}</h2>
        end
    </div>
  )
}

export default ProductCard
