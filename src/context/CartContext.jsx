import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { getProductById } from '../data/products';

export const CartContext = createContext(null)

const CartProvider = ({children}) => {
  const [cartItems ,setCartItems]=useState([])

  const addToCart=(productId)=>{

    const existing= cartItems.find((item)=>item.id===productId)
    if (existing){
      const currentQuantity=existing.quantity
      const updatedCartItems=cartItems.map((item)=>
        item.id===productId?{...item,quantity:item.quantity+1}:item)
      setCartItems(updatedCartItems)

    }else{
      setCartItems([...cartItems,{id:productId,quantity:1}])
    }
    

  }

  const getCartItemsWithProducts=()=>{
    return cartItems.map(item=>({
      ...item,
      product: getProductById(item.id)
    })).filter(item=>item.product);
  }

  const removeFromCart=(productId)=>{
    setCartItems(cartItems.filter((item)=>item.id !== productId))
  }

  const updateQuantity=(productId, quantity)=>{
    if (quantity<=0){
      removeFromCart(productId)
      return
    }
    setCartItems(
      cartItems.map((item)=>
      item.id === productId ? {...item, quantity}: item)
    )
  }

  const getCartTotal=()=>{
    const total=cartItems.reduce((total, item)=>{
      const product=getProductById(item.id)
      return total+(product ? product.price*item.quantity : 0)
    } ,0)
    return total
  }

  const clearCart=()=>{
    setCartItems([])
  }



  return (
    <CartContext.Provider value={{cartItems,
    addToCart, 
    getCartItemsWithProducts,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart=()=>{
  const context=useContext(CartContext)
  return context
}