import { createElement as $ } from 'react'
import CartIcon from '@/assets/svg/icon-cart-header.svg'
import styles from './style.styl'
import { withCartStore } from '@/store/cartStore'

const AccountCart = ({ store: { cartItems } }) =>
  $('a', { href: '/', className: styles.accountCart },
    $('span', { className: styles.cart }, 
      $('span', { className: styles.cartBadge}, $('span', null, cartItems.length)),
      $(CartIcon)),
    $('span', { className: styles.cartText }, 'Корзина'))

export default withCartStore(AccountCart)