import { createElement as $, useState } from 'react'
import { createContext } from 'react'
import mockData from './mockData'

export const CartContext = createContext({})

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

  return $(CartContext.Provider, {
    value: {
      ...store,
      setStoreItem,
      deleteCartItem,
      changeItemQuantity,
    }
  }, children)
}

export const withCartStore = Component => props =>
  $(CartContext.Consumer, null,
    store => $(Component, { ...props, store }))