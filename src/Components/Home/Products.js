import React from 'react'
import products from '../../data';
import ProductCards from './ProductCards';

const Products = () => {

    

  return (
    <>
  
   <div className="container mt-5"> 
    
     <div className="row row-cols-md-4 g-3">
            {
                products.map( (product) => {
                    return(
                        <>
                            <ProductCards key={product.id} product={product} />
                        </>
                    )
                })
            }
          
        </div>   
        </div>
        

        </>
            
  )
}

export default Products;