import { createElement as $ } from 'react'
import styles from './style.styl'
import { withCartStore } from '@/store/cartStore'
import CartItem from '@/components/CartItem'

const Cart = ({ 
  store: { 
    cartItems, 
    setStoreItem,
    deleteCartItem,
    changeItemQuantity,
  } 
}) =>
  $('div', { className: styles.cart },
    $('div', { className: styles.cartInner },
      $('div', { className: styles.cartHeader },
        $('h1', { className: styles.cartTitle }, 
          cartItems.length ? 'Вот что в Вашей корзине' : 'В Вашей корзине пока ничего нет :('),
        !!cartItems.length && $('button', {
          className: styles.clearCart,
          onClick: () => setStoreItem('cartItems', [])
        }, 'Очистить корзину')),
      $('div', null,
        cartItems.map(item => $(CartItem, { 
          ...item, 
          key: item.id,
          deleteCartItem,
          changeItemQuantity,
        })))))

export default withCartStore(Cart)