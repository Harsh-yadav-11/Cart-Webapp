import React from 'react'
import Product from './component/Product'


export default function ProductList(props) {
    
     return (
      props.productList.length > 0 ?
    props.productList.map((product,i)=>{
 
        return <Product product ={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
    })
    : <h1> No Prodect Exist in the Carts</h1>
  )
}
