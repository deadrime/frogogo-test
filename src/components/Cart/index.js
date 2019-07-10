import { createElement as $ } from 'react'
import styles from './style.styl'
import { withCartStore } from '@/store/cartStore'
import CartItem from '@/components/CartItem'
import Total from '@/components/Total'
import cn from 'classnames'

const getTitle = cartSize =>
  cartSize > 0
    ? 'Вот что в вашей корзине'
    : 'В вашей корзине пока ничего нет :('

const Cart = ({
  store: {
    cartItems,
    gift,
    totalAmount,
    maxDiscount,
    setStoreItem,
    clearCart,
    deleteCartItem,
    changeItemQuantity,
    accountAmount,
    deliveryPrice,
    usedAccountAmount,
    freeShippingValue,
  },
  className,
}) =>
  $('div', { className: cn(styles.cart, className) },
    $('div', { className: styles.cartInner },
      $('div', { className: styles.cartHeader },
        $('h1', { className: styles.cartTitle }, getTitle(cartItems.length)),
        cartItems.length > 0 && $('button', {
          className: styles.clearCart,
          onClick: clearCart,
        }, 'Очистить корзину')),
      $('div', { className: styles.cartItems },
        cartItems.map(item =>
          $(CartItem, {
            ...item,
            key: item.id,
            onDelete: deleteCartItem,
            onChangeQuantity: changeItemQuantity,
          })),
        gift && $(CartItem, {
          ...gift,
          onDelete: () => setStoreItem('gift', null)
        })),
      cartItems.length > 0 && $(Total, { 
        totalAmount, 
        totalCount: cartItems.length,
        accountAmount,
        usedAccountAmount,
        deliveryPrice,
        maxDiscount,
        freeShippingValue,
        setAmount: value => setStoreItem('usedAccountAmount', value),
      })
    ))

export default withCartStore(Cart)