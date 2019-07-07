import { createElement as $ } from 'react'
import styles from './style.styl'
import { withCartStore } from '@/store/cartStore'

const Cart = ({ store: { setStoreItem } }) => 
  $('div', { className: styles.cart },
    $('div', { className: styles.cartInner },
      $('div', {className: styles.cartHeader }, 
        $('h1', { className: styles.cartTitle }, 'Вот что в Вашей корзине'), 
        $('button', {
          className: styles.clearCart,
          onClick: () => setStoreItem('cartItems', []) 
        }, 'Очистить корзину'))))

export default withCartStore(Cart)