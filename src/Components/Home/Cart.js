import React, { useContext } from 'react'
import CartContext from '../../Context/Cart/CartContext'
import CartItem from './CartItem';

const Cart = () => {

    const { showCart, cartItems, showHideCart} = useContext(CartContext);

    

  return (
    <>
    <div style={{position: "absolute",zIndex: "2", backgroundColor: "white" , left:"66%" }}>
        {
            showCart && (
                <div className='cart_wrapper wrapper border'>
                       <div style={{textAlign:"right" , cursor:"pointer"}}
                       >
                       <i className="bi bi-x-circle-fill fs-5 "
                       onClick={showHideCart}></i>
                        </div> 

                <div className='cart__innerWrapper'>
                    {cartItems.length === 0 ? (<h5> Cart is Empty </h5>) : (
                        <ul className='p-4'>  
                            {cartItems.map((product)=>{
                                return(
                                    <>
                                    <CartItem key={product.id} product={product}
                                     />
        
                                    </>
                                )
                            })}
                        </ul>
                    )}
                </div>
        
                    <div className='cart h-25 fw-bold text-success text-center mb-2'><hr/>
                     Total - $
                    {cartItems.reduce((amount, item)=>item.price + amount, 0)
                    }
              
                </div>
              
                </div>
                )
        }
    
         </div>
    </>
  )
}

export default Cart