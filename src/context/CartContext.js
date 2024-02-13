import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  placed: false,
  orderPlaced: () => {},
})

export default CartContext
