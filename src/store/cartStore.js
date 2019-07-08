import { createElement as $, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext({})

const initialState = {
  accountAmount: 4700,
  cartAmount: 0,
  freeShippingValue: 1000,
  deliveryPrice: 299,
  goldStatusBonus: 20,
  gift: [
    {
      id: 2,
      title: 'Очки солнцезащитные спортивные антибликовые с поляризацией',
      quantity: 1,
      image: require('../assets/images/img-product-cart-06@2x.jpg'),
    }
  ],
  cartItems: [
    {
      id: 0,
      title: 'Стакан YPSILON BRIO CAPPUCCINO 220 мл',
      color: '#e1eb31',
      price: 1790,
      minDiscount: 2000,
      maxDiscount: 2000,
      quantity: 2,
      image: require('../assets/images/img-product-cart-01@2x.jpg'),
    },
    {
      id: 1,
      title: 'Одеяло Woolfield Sunrise',
      size: '170x200',
      price: 2000,
      minDiscount: 0,
      maxDiscount: 1000,
      quantity: 1,
      image: require('../assets/images/img-product-cart-02@2x.jpg'),
    },
    {
      id: 2,
      title: 'Беспроводная колонка Goodyear Bluetooth speaker',
      price: 5000,
      minDiscount: 0,
      maxDiscount: 2500,
      quantity: 1,
      image: require('../assets/images/img-product-cart-05@2x.jpg'),
    },
  ],
}

export const CartStore = ({ children }) => {
  const [store, setStore] = useState(initialState)

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