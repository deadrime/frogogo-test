import { createElement as $, useState } from 'react'
import { createContext } from 'react'
import mockData from './mockData'

export const CartContext = createContext(mockData)

export const CartStore = ({ children }) => {
  const [store, setStore] = useState(mockData)

  const setStoreItem = (type, value) =>
    setStore(prev => ({
      ...prev,
      [type]: value,
    }))

  const deleteCartItem = (id) =>
    setStore(prev => ({
      ...prev,
      cartItems: prev.cartItems.filter(i => i.id !== id),
    }))

  const changeItemQuantity = (id, value) =>
    setStore(prev => {
      const item = prev.cartItems.find(i => i.id === id)
      item.quantity += value
      if (item.quantity === 0) deleteCartItem(id)

      return ({ ...prev })
    })

  const clearCart = () => {
    setStore(prev => ({
      ...prev,
      cartItems: [],
      gift: null,
    }))
  }

  const stats = {
    totalAmount: 0, 
    maxDiscount: 0
  }
  
  store.cartItems
    .reduce((acc, { price, quantity, maxDiscount }) => {
      acc.totalAmount += price * quantity
      acc.maxDiscount += maxDiscount * quantity
      return acc
    }, stats)

  return $(CartContext.Provider, {
    value: {
      ...store,
      ...stats,
      clearCart,
      setStoreItem,
      deleteCartItem,
      changeItemQuantity,
    }
  }, children)
}

export const withCartStore = Component => props =>
  $(CartContext.Consumer, null,
    store => $(Component, { ...props, store }))