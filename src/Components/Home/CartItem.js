import React, { useContext } from 'react'
import './CartItem.css'
import CartContext from '../../Context/Cart/CartContext'


const CartItem = ({ product }) => {

    const { removeItem } = useContext(CartContext)

  return (
    <>
  
    <div className='row'>
    <li className='list text-right'>
      <div className='col-3'>
      <img className="img p-1" src={product.image} alt='' />
      </div>
      <div className='col-3'>
      <p className='fw-bold w-100 fs-6'>
        {product.name}
         </p>
      </div>
      <div className='col-3'>
      <div className=''>
        ${product.price}
          </div> 
      </div>
      <div className='col-2'>
      <button className='btn btn-outline-danger' onClick={() => removeItem(product._id)}>
        Remove
      </button>
      </div>
      
      
    </li>
    </div>
 
    </>
  )
}

export default CartItem