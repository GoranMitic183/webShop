import React from 'react'
import { useSelector } from 'react-redux'

const Shop = () => {
  const { products } = useSelector((state)=>({...state.shopData}));
  console.log(products);
  
  return (
    <div>
      {products.map((product)=>{
        return (
<div>
        <div>
          <div>
            <img src={product.img[0][1]} alt='pic'></img>
          </div>
          <div>
            <h2>{product.productName}</h2>
            <p>{product.type}</p>
            <div>
              Kol. <btn>-</btn>{product.kolicina}<btn>+</btn>
            </div>
          </div>
        </div>
        <div>
          <btn>X</btn>
          <h2>{product.price}</h2>
        </div>
      </div>
        )
      })}
      
    </div>
  )
}

export default Shop