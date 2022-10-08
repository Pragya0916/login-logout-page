import React, { useContext } from 'react'
import CartContext from '../../Context/Cart/CartContext';
import './ProductCards.css'

const ProductCarts = ( {product} ) => {

    const { addToCart} = useContext(CartContext)
  return (
    <>
         <div className="cards col">
          <div className='card'> 
            <div className='card'>
                <img src={product.image} alt="img"/>
            </div>
             
            <div className='card-body'>
                <h3 style={{color: "#7EC8E3"}}>{product.name}</h3>
                <p style={{color: "grey"}}> {product.price}</p>
            </div>
            
           
            <button className='cardsBtn btn border border-primary' onClick={()=>addToCart(product)}>Add to Cart</button>
            
          </div>
         </div>
     </>
  )
}

export default ProductCarts