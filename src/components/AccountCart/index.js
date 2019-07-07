import { createElement as $ } from 'react'
import CartIcon from '@/assets/svg/icon-cart-header.svg'
import styles from './style.styl'

const AccountCart = ({ amount = 15 }) =>
  $('div', { className: styles.accountCart },
    $('span', { className: styles.card }, 
      $('span', { className: styles.cardBadge}, amount),
      $(CartIcon)),
    $('span', { className: styles.cartText }, 'Корзина'))

export default AccountCart